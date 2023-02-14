var express = require('express');
var router = express.Router();

const Blog = require("./models/Blogs")

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const allBlogs = await Blog.find({})
    res.json({
      sucess: true,
      blogs: allBlogs
    })
  } catch (error) {
    
  }
  // res.render('index', { title: 'Express' });
});

module.exports = router;
