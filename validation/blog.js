

const postBlogValidate = (blog)=>{
    if (blog.title === undefined || typeof blog.title !== "string" || blog.title.length > 40){
        return {
            success: false,
            message: "blog title is required, must be a string and must be less than 40 chars long"
        }
    }
    if (blog.text === undefined || typeof blog.text !== "string"){
        return {
            success: false,
            message: "blog text is required and must be a string"
        }
    }
    if (blog.author === undefined || typeof blog.author !== "string" || blog.author.length > 40){
        return {
            success: false,
            message: "blog author is required, must be a string and must be less than 40 chars long"
        }
    }
    if (blog.category === undefined || !Array.isArray(blog.category)){
        return {
            success: false,
            message: "blog category is required and must be an array"
        }
    }
    return {
        success:true
    }
}

const putBlogValidate = (blog, blogToUpdate)=>{
    
    if(blog.title !== undefined){
        if (typeof blog.title !== "string" || blog.title.length > 40){
            return {
                success: false,
                message: "blog title must be a string and must be less than 40 chars long"
            }
        }
        else{
            blogToUpdate.title = blog.title
        }
    }
    if(blog.text !== undefined){
        if (typeof blog.text !== "string"){
            return {
                success: false,
                message: "blog text must be a string"
            }
        }
        else{
            blogToUpdate.text = blog.text
        }
    }
    if(blog.author !== undefined){
        if (typeof blog.author !== "string" || blog.author.length > 40){
            return {
                success: false,
                message: "blog author must be a string and must be less than 40 chars long"
            }
        }
        else{
            blogToUpdate.author = blog.author
        }
    }
    if(blog.category !== undefined){
        if (!Array.isArray(blog.category)){
            return {
                success: false,
                message: "blog category is required and must be an array"
            }
        }
        else{
            blogToUpdate.category = blog.category
        }
    }
    return {
        success: true,
        updatedBlog: blogToUpdate
    }
}


module.exports = [postBlogValidate, putBlogValidate]