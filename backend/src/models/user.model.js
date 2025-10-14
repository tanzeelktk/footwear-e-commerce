const mongoose = require ("mongoose")

const userSchema = new mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    },
    password:{
        type:String,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    }
})

const userModel = mongoose.model("users", userSchema)
module.exports = userModel