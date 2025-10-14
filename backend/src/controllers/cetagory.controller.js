const categoryModel = require("../models/categories.model");

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    console.log("called");
    const catgExist = await categoryModel.findOne({ name });
    if (catgExist)
      return res.status(403).json({ message: "category already exist." });
    const category = new categoryModel({ name });
    const dbResponse = await category.save();
    res
      .status(200)
      .json({ message: "category added successfully.", data: dbResponse });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getCategories = async (req, res) => {
    try {
        const resData = await categoryModel.find()
        res.status(200).json({data:resData})
    } catch (error) {
        res.status(401).json(error)
    }
}

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRes = await categoryModel.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted successfully", data: deleteRes });
  } catch (err) {
    res.status(401).json(err);
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    console.log(name);
    const updateResponse = await categoryModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "updated successfully", data: updateResponse });
  } catch (error) {
    res.status(401).json(error);
  }
};

module.exports = {
  createCategory,
  deleteCategory,
  updateCategory,
  getCategories
};
