const mongoose = require("mongoose");
const schema = mongoose.Schema;


const userSchema = new schema({
    fristName:String,
    lastName:String,
    email:String,
    phoneNumber:String,
    age:Number,
    country:String,
    gender:String,
} , {timestamps : true});

const User = mongoose.model("user" , userSchema);

module.exports = User;