const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: [true, "age is required"],
    },
    age: {
        type: Number,
        required: [true, "age is required"],
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
})

var userModel = mongoose.model("user", userSchema);
module.exports = { userModel }