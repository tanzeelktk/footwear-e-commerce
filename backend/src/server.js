const express = require("express")
const app = require("./app")
require("dotenv").config()
const Port = process.env.PORT || 8000

app.listen(Port, ()=>{
    console.log(`Server is running at http://localhost:${Port}`)
})