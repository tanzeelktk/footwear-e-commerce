const express = require("express")
const { createCategory, deleteCategory, updateCategory, getCategories } = require("../controllers/cetagory.controller")
const { verifyToken } = require("../utils/jwt")
const { checkRole } = require("../middlewares/auth.midleware")
const categRoutes = express.Router()

categRoutes.post("/create", verifyToken, checkRole(["admin"]), createCategory)
categRoutes.delete("/delete/:id", verifyToken, checkRole(["admin"]), deleteCategory)
categRoutes.put("/update/:id", verifyToken, checkRole(["admin"]), updateCategory)
categRoutes.get("/get-all", verifyToken, checkRole(["admin"]), getCategories)

module.exports = categRoutes