const express = require("express")
const { userRegister, userLogin } = require("../controllers/user.controller")
const upload = require("../middlewares/upload.middleware")
const userRoutes = express.Router()

userRoutes.post("/register",upload.single("image"), userRegister)
userRoutes.post("/login", userLogin)


module.exports = userRoutes