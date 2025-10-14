const productModel = require("../models/product.model");

const addProduct = async (req, res) => {
  const { title, desc, price, category, discount } = req.body;
  const images = req.files.map((file, index) => ({
    url: `${file.filename}`,
    alt: `${title}-image${index + 1}`,
    isMain: index === 0,
  }));
  try {
    const product = new productModel({
      title,
      desc,
      price,
      category,
      discount,
      images,
    });
    const productRes = await product.save();
    res
      .status(200)
      .json({ message: "product added successfully", data: productRes });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteResponse = await productModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Product deleted successfully.", data: deleteResponse });
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    let updateData = { ...req.body };
    if (req.files && req.files.length > 0) {
      updatedData.images = req.files.map((file, index) => ({
        url: file.filename,
        alt: `${req.body.title || "product"}-image${index + 1}`,
        isMain: index === 0, // Pehli image ko main bana do
      }));
    }
    const updateResp = await productModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateResp) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "updated successfully", data: updateResp });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating product", error: error.message });
  }
};

const addReview = async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;
  const  userId  = req.user.id;
  
  try {
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === userId.toString()
    );
    if (alreadyReviewed) {
      return res.status(400).json({ message: "Product already reviewed" });
    }
    const review = {
      user: userId,
      rating: Number(rating),
      comment,
    };
    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.ratings =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;
    await product.save();
    res
      .status(201)
      .json({ message: "Review added successfully", data: product });
  } catch (error) {
    res.status(500).json({
      message: "Error adding review",
      error: error.message,
    });
  }
};

module.exports = {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  addReview,
};
