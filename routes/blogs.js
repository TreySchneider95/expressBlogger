const express = require('express');
const router = express.Router();
// const blogValidate = require('../validation/blog');
const Blog = require("./models/Blogs")
// //instantiate mongodb 
// const { db } = require('../mongo');

// /* GET users listing. */
router.get('/all', async function(req, res, next) {
    const blogs = await Blog.find({})

    res.json({
      sucess:true,
      blogs: blogs
    });

    
}); 



// router.get('/single/:blogTitleToGet', async function(req, res, next){
//     const blog = await db()
//     .collection('sample_blogs')
//     .find({title: req.params.blogTitleToGet})
//     .toArray(function(err, result){
//         if(err){
//             res.status(400).send("Error fetching blog")
//         }else{
//             res.json(result)
//         }
//     })
//     res.json({
//         succsess:true,
//         blog: blog
//     })
// })

// router.delete('/single/:blogTitleToDelete', async function(req, res, next){
//     const blog = await db()
//     .collection('sample_blogs')
//     .deleteOne({title: req.params.blogTitleToDelete}, function(err, result){
//         if(err){
//             res.status(400).send("Error deleting blog")
//         }else{
//             res.status(200).send({
//                 success:true
//             })
//         }
//     })
//     res.json(blog)
// })

router.post('/create-one', async (req, res)=>{
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
    res.json(newBlogValid)
})

// router.put('/update-one/:title', (req, res)=>{
//     console.log(req.body)
//     const blogValidResponse = blogValidate[1](req.body)
//     if (blogValidResponse.success){
//         blogValidResponse.updatedBlog.lastModified = new Date()
//         db()
//         .collection('sample_blogs')
//         .updateOne({title: req.params.title}, req.body, function(err, result){
//             if(err){
//                 res.status(400).send("Error updating blog")
//             }
//         })
//         res.json({
//             success: true
//         })
//     }
//     else{
//         res.json(blogValidResponse)
//     }
// })

module.exports = router;
