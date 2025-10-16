const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");

const userRegister = async (req, res) => {
  const image = req.file.filename;
  const { name, email, password } = req.body;
  try {
    const userExist = await userModel.findOne({ email });
    if (userExist)
      return res.status(403).json({ message: "email already exist" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
      image,
    });
    const response = await user.save();
    res
      .status(201)
      .json({ message: " user created successfully", data: response });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({ message: "All users data.", data: users });
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({
      message: "Failed to fetch users.",
      error: error.message,
    });
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
      id: userExist._id,
      email: userExist.email,
      role: userExist.role,
    };
    const token = await generateToken(payload);
    const resData = {
      name: userExist.name,
      email: userExist.email,
      isVerified: userExist.isVerified,
      token: token,
    };
    res.status(200).json({ message: "user login successfully", data: resData });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if the user exists
    const userExist = await userModel.findById(userId);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }

    // Delete user
    const deleteResponse = await userModel.findByIdAndDelete(userId);

    res.status(200).json({
      message: "User deleted successfully.",
      data: deleteResponse,
    });
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res.status(500).json({
      message: "Failed to delete user.",
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id
    const {password, role} = req.body
    const userExist = await userModel.findById(userId)
    if(!userExist)
      return res.status(404).json({message:"User not found."})
    
    const updateData = {}

    if(password){
      const hashedPassword = await bcrypt.hash(password, 10)
      updateData.password = hashedPassword
    }

    if(role){
      updateData.role = role
    }

    const updatedUser = await userModel.findByIdAndUpdate(userId, {$set:updateData}, {new:true})
    res.status(200).json({message:"Updated successfully.", data:updatedUser})

  } catch (error) {
    console.error("Error updating user data:", error.message);
    res.status(500).json({
      message: "Failed to update user data.",
      error: error.message,
    });
  }
}

module.exports = {
  userRegister,
  userLogin,
  getAllUsers,
  deleteUser,
  updateUser
};
