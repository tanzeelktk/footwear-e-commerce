const express = require("express")
const { verifyToken } = require("../utils/jwt")
const { checkRole } = require("../middlewares/auth.midleware")
const { addProduct, getProducts, deleteProduct, updateProduct, addReview } = require("../controllers/product.controller")
const upload = require("../middlewares/upload.middleware")
const productRoutes = express.Router()

productRoutes.post("/insert", upload.array("images", 5), verifyToken, checkRole(["admin"]),  addProduct)
productRoutes.get("/get-all", getProducts)
productRoutes.delete("/delete/:id", verifyToken, checkRole(["admin"]), deleteProduct)
productRoutes.put("/update/:id", verifyToken, checkRole(["admin"]), updateProduct)
productRoutes.post("/review/:id", verifyToken, addReview)


module.exports = productRoutes