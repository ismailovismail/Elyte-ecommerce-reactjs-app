import database from '../firebase/firebaseConfig'

export const addBlog = (blog) => ({
    type:"add_blog",
    blog

})

export const addBlogToDatabase = (blogData = {}) => {
    return (dispatch) => {
        const { title='',brand='',text='',img='' } = blogData;
        const blog = {title,brand,text,img};

        database.ref("blog").push(blog).then((res) => {
            dispatch(addBlog({
                id: res.key,
                ...blog
            }))
        })
    }
}

export const removeBlog =(id)=>({
    type:'remove_blog',
    payload:id
})

export const removeBlogFromDatabase = (id) => {
    return (dispatch) => {
        return database.ref(`blog/${id}`).remove().then(() => {
            dispatch(removeBlog(id));
        })
    }   
}

export const editBlog=(id,update)=>({
    type:'edit_blog',
    id,
    update
})

export const editBlogFromDatabase = (id, update) => {
    return (dispatch) => {
        return database.ref(`blog/${id}`).update(update).then(() => {
            dispatch(editBlog(id,update));
        })
    }
}

export const setBlogs = (blogs) => ({
    type: "set_blog",
    payload:blogs
})

export const getBlogsFromDatabase = () => {
    return (dispatch) => {
        return database.ref("blog").once("value").then((snapshot) => {
            const blogs = [];

            snapshot.forEach((blog) => {
                blogs.push({
                    id: blog.key,
                    ...blog.val()
                })
            })

            dispatch(setBlogs(blogs));
        })
    }
}