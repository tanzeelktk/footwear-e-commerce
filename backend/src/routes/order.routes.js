const express = require("express")
const { placeOrder, getAllOrders, getUserOrders, updateOrder, deleteOrder } = require("../controllers/order.controller")
const { verifyToken } = require("../utils/jwt")
const { checkRole } = require("../middlewares/auth.midleware")
const orderRoutes = express.Router()

orderRoutes.post("/place-order",  placeOrder)
orderRoutes.get("/all-orders", checkRole(["admin"]), getAllOrders)
orderRoutes.get("/user-orders/:id",checkRole(["admin"]), getUserOrders)
orderRoutes.get("/user-orders", getUserOrders)
orderRoutes.put("/update/:id", checkRole(["admin"]), updateOrder)
orderRoutes.delete("/delete/:id", checkRole(["admin"]), deleteOrder)

module.exports = orderRoutes