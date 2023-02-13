

const postBlogValidate = (blog)=>{
    console.log(blog.title)
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
    if (blog.categories === undefined || !Array.isArray(blog.categories)){
        return {
            success: false,
            message: "blog category is required and must be an array"
        }
    }
    return {
        success:true
    }
}

const putBlogValidate = (blog)=>{
    if("title" in blog){
       console.log('here')
        if (typeof blog.title !== "string" || blog.title.length > 40){
            return {
                success: false,
                message: "blog title must be a string and must be less than 40 chars long"
            }
        }
    }
    print('here')
    if(blog.text !== undefined){
        if (typeof blog.text !== "string"){
            return {
                success: false,
                message: "blog text must be a string"
            }
        }
    }
    if(blog.author !== undefined){
        if (typeof blog.author !== "string" || blog.author.length > 40){
            return {
                success: false,
                message: "blog author must be a string and must be less than 40 chars long"
            }
        }
    }
    if(blog.categories !== undefined){
        if (!Array.isArray(blog.categories)){
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
    }
}


module.exports = [postBlogValidate, putBlogValidate]