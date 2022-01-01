const mongoose = require("mongoose");

const userScema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

userModel = mongoose.model("user", userScema);

module.exports = userModel