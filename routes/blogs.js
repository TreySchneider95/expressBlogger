const express = require('express');
const router = express.Router();
// const blogValidate = require('../validation/blog');
const Blog = require("./models/Blogs")
const blogController = require("./controllers/blogController")

// //instantiate mongodb 
// const { db } = require('../mongo');

// /* GET users listing. */
router.get('/all', blogController.getAllBlogs); 

router.get('/single/:blogIdToGet', blogController.getSingleBLog)

router.delete('/single/:blogTitleToDelete', blogController.deleteBlog)

router.post('/create-one', blogController.postBlog)

router.put('/update-one/:title', blogController.putBlog)

module.exports = router;
