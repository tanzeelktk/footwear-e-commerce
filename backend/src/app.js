const express = require("express")
const userRoutes = require("./routes/user.routes")
const app = express()


app.use(express.json())

app.use("/user", userRoutes)

module.exports = app