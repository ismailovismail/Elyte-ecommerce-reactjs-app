const express = require("express");
const router = express.Router();
const database = require('../database/db')
const imageUpload = require('../helpers/image-upload')
const fs = require('fs')
router.get('/api/get/:id', (req, res) => {
    const { id } = req.params;
    const sqlGet = 'SELECT * FROM blog_db where id = ?';
    database.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result)
    })
})


router.post('/api/post', imageUpload.single('img'), (req, res) => {
    const img = req.file.filename
    console.log(img);
    const { title, brand, description } = req.body
    const sqlPost = 'INSERT INTO blog_db (title,brand,description,img) VALUES (?,?,?,?)';
    database.query(sqlPost, [title, brand, description, img], (error, result) => {
        if (error) {
            console.log(error);
        }
    })
})



router.put('/api/update/:id', imageUpload.single('img') , (req, res) => {
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
})




router.get('/api/get', (req, res) => {
    const sqlGet = 'SELECT * FROM blog_db'
    database.query(sqlGet, (error, result) => {
        res.send(result)
    })
})



router.delete('/api/remove/:id', (req, res) => {
    const { id } = req.params;
    const sqlDelete =
        "DELETE FROM blog_db where id = ?";
    database.query(sqlDelete, id, (error, result) => {
        if (error) {
            console.log(error);
        }
    })
})

module.exports = router;
