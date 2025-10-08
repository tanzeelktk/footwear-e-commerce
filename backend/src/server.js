const express = require("express")
const app = require("./app")
const connectDb = require("./config/dbConnection")
require("dotenv").config()
const Port = process.env.PORT || 8000

const createServer = async () => {
    await connectDb()
    app.listen(Port, ()=>{
    console.log(`Server is running at http://localhost:${Port}`)
})
}

createServer()
