const Blog = require("../models/Blogs")


async function getAllBlogs(req, res, next) {
    const blogs = await Blog.find({})

    res.json({
      sucess:true,
      blogs: blogs
    });

    
}


async function getSingleBLog(req, res, next){
    const blog = await Blog.find({title: req.params.blogTitleToGet})
    res.json({
        sucsess: true,
        blog: blog
    })
}

async function deleteBlog(req, res, next){
    const blogToDelete = await Blog.deleteOne({title: req.params.blogTitleToDelete})
    res.json({
        sucess: true,
        blog: blogToDelete
    })
}

async function postBlog(req, res, next){
    const title = req.body.title
    const text = req.body.text
    const author = req.body.author
    const categories = req.body.categories

    const newBlog = new Blog({
        title,
        text,
        author,
        categories
    })

    const saveData = await newBlog.save()

    res.json({
        sucess: true,
        blogs: saveData
    })
}

async function putBlog(req, res, next){
    const update = req.body
    const blogUpdate = await Blog.updateOne({title: req.params.title}, update)

    res.json({
        sucess: true,
        blog: blogUpdate
    })
}

module.exports = {
    getAllBlogs,
    getSingleBLog,
    deleteBlog,
    postBlog,
    putBlog
}