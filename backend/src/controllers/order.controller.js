const orderModel = require("../models/order.model");

const placeOrder = async (req, res) => {
  try {
    const userId = req.user.id;

    const { items, shippingAddress, paymentMethod } = req.body;
    if (!items || items.length === 0)
      return res.status(400).json({ message: "Items required for order" });
    let totalAmount = 0;
    for (let item of items) {
      totalAmount += item.price * item.quantity;
    }
    const newOrder = new orderModel({
      user: userId,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
    });
    await newOrder.save();
    res
      .status(200)
      .json({ message: "Your order has been placed.", data: newOrder });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      message: "Error placing order",
      error: error.message,
    });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const role = req.user.role;
    let userId;
    if (role === "admin") {
      userId = req.params.id;
    } else {
      userId = req.user.id;
    }
    const ordersData = await orderModel
      .find({ user: userId })
      .populate("items.product", "title price images");
    if (!ordersData || ordersData.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }
    res.status(200).json({ data: ordersData });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({
      message: "Error fetching orders",
      error: error.message,
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();
    res.status(200).json({ data: orders });
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const { status, paymentMethod, shippingAddress } = req.body;
    const orderExist = await orderModel.findById(orderId);
    if (!orderExist) res.status(404).json({ message: "Order not found." });
    // ✅ Update only provided fields
    if (status) orderExist.status = status;
    if (paymentMethod) orderExist.paymentMethod = paymentMethod;
    if (shippingAddress) orderExist.shippingAddress = shippingAddress;
    await orderExist.save();
    res
      .status(200)
      .json({ message: "Order updated successfully", data: orderExist });
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({
      message: "Error updating order",
      error: error.message,
    });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const orderExist = await orderModel.findById(orderId);
    if (!orderExist) return res.status(404).json({ message: "Order not found." });
    const deletedResponse = await orderModel.findByIdAndDelete(orderId);
    res
      .status(200)
      .json({ message: "Order deleted successfully.", data: deletedResponse });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({
      message: "Error deleting order",
      error: error.message,
    });
  }
};

module.exports = {
  placeOrder,
  getUserOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
};
