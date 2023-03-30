const mongoose = require("mongoose")
const {v4: uuidv4} = require("uuid")

const blogsSchema = new mongoose.Schema({
    title: String,
    text: String,
    author: String,
    categories: [String],
    id: {type: String, default: ()=>uuidv4()},
    createdAt: {type: Date, default: Date.now}
})

const Blog = mongoose.model("sample_blog", blogsSchema)

module.exports = Blog