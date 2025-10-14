const express = require("express")
const userRoutes = require("./routes/user.routes")
const categRoutes = require("./routes/category.routes")
const productRoutes = require("./routes/product.routs")
const orderRoutes = require("./routes/order.routes")
const { verifyToken } = require("./utils/jwt")
const upload = require("./middlewares/upload.middleware")
const app = express()



app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes)
app.use("/category", categRoutes)
app.use("/product", productRoutes)
app.use("/order", verifyToken, orderRoutes)

module.exports = app