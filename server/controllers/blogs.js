const database = require('../database/db')

 const getSingleBlog = (req, res) => {
    const { id } = req.params;
    const sqlGet = 'SELECT * FROM blog_db where id = ?';
    database.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result)
    })
}

const addBlog = (req, res) => {
    const img = req.file.filename
    const { title, brand, description } = req.body
    const sqlPost = 'INSERT INTO blog_db (title,brand,description,img) VALUES (?,?,?,?)';
    database.query(sqlPost, [title, brand, description, img], (error, result) => {
        if (error) {
            console.log(error);
        }
    })
}

const updateBlog = (req, res) => {
    const { id } = req.params;
    const { title, brand, description } = req.body;
    let img = req.body.img
    if (req.file) {
        img=req.file.filename 
    }

    const sqlUpdate = 'UPDATE blog_db SET title = ? , brand = ? , description = ? , img = ? WHERE id = ? '
    database.query(sqlUpdate, [title, brand, description, img, id], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result)
    })
}

const getBlogs = (req, res) => {
    const sqlGet = 'SELECT * FROM blog_db'
    database.query(sqlGet, (error, result) => {
        res.send(result)
    })
}

const deleteBlog = (req, res) => {
    const { id } = req.params;
    const sqlDelete =
        "DELETE FROM blog_db where id = ?";
    database.query(sqlDelete, id, (error, result) => {
        if (error) {
            console.log(error);
        }
    })
}

module.exports = {getSingleBlog,addBlog,updateBlog,getBlogs,deleteBlog}