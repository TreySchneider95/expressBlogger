const mongoose = require("mongoose")
const {v4: uuidv4} = require("uuid")

const UserSchema = new mongoose.Schema({
    dateCreated: {type: Date, default: Date.now},
    userId: {type: String, default: ()=>uuidv4()},
    email: String,
    password: String
})

const User = mongoose.model("user", UserSchema)

module.exports = User