const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");

const userRegister = async (req, res) => {
  let { name, email, password } = req.body;
  try {
    const userExist = await userModel.findOne({ email });
    if (userExist)
      return res.status(403).json({ message: "email already exist" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const response = await user.save();
    res
      .status(201)
      .json({ message: " user created successfully", data: response });
  } catch (error) {
    res.status(400).json(error);
  }
};

const userLogin = async (req, res) => {
  let { email, password } = req.body;
  try {
    const userExist = await userModel.findOne({ email });
    if (!userExist)
      return res.status(400).json({ message: "invalid credentials" });
    const passCompare = await bcrypt.compare(password, userExist.password);
    if (!passCompare)
      return res.status(400).json({ message: "invalid credentials" });
    const payload = {
      id:userExist._id,
      email:userExist.email,
      role:userExist.role
    }
    const token = await generateToken(payload)
    const resData = {
      name: userExist.name,
      email: userExist.email,
      isVerified: userExist.isVerified,
      token:token
    };
    res.status(200).json({ message: "user login successfully", data: resData });
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  userRegister,
  userLogin,
};
