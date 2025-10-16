const express = require("express")
const { userRegister, userLogin, getAllUsers, deleteUser, updateUser } = require("../controllers/user.controller")
const upload = require("../middlewares/upload.middleware")
const { verifyToken } = require("../utils/jwt")
const { checkRole } = require("../middlewares/auth.midleware")
const userRoutes = express.Router()

userRoutes.post("/register",upload.single("image"), userRegister)
userRoutes.post("/login", userLogin)
userRoutes.get("/users-list", verifyToken, checkRole(["admin"]), getAllUsers)
userRoutes.delete("/delete-user/:id", verifyToken, checkRole(["admin"]), deleteUser)
userRoutes.put("/update-user/:id", verifyToken, checkRole(["admin"]), updateUser)



module.exports = userRoutes