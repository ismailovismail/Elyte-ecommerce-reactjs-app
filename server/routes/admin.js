const express = require("express");
const router = express.Router();
const imageUpload = require('../helpers/image-upload');
const fs = require('fs');
const { getSingleBlog, addBlog, updateBlog, getBlogs, deleteBlog } = require("../controllers/blogs");


router.get('/api/get/:id', getSingleBlog )


router.post('/api/post', imageUpload.single('img'), addBlog )



router.put('/api/update/:id', imageUpload.single('img') ,updateBlog )



router.get('/api/get', getBlogs )



router.delete('/api/remove/:id', deleteBlog )


module.exports = router;
