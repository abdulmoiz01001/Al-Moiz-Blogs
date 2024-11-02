// /routes/blogRoutes.js
const express = require('express');
const router = express.Router();
 // Adjust the path as needed
const {getAllBlogs , createBlog, uploadImage} = require('../controllers/blogController');

// GET all blogs
router.get('/get', getAllBlogs);

// POST a new blog
router.post('/create', createBlog);

module.exports = router;
