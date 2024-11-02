// /controllers/blogController.js
const Blog = require('../models/blogModel');

// Fetch all blog posts
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        console.log('Blogs fetched:', blogs); // Add this line for debugging
        return res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Create a new blog post
const createBlog = async (req, res) => {  
    try {
        const { title, subtitle, image, description } = req.body;
        console.log({ title, subtitle, image, description }); 
        const newBlog = new Blog({ title, subtitle, image, description });
        const savedBlog = await newBlog.save();
        return res.status(201).json(savedBlog);
    } catch (error) {
        res.status(400).json({ message: error.message, error });
    }
};



// Export the controller functions
module.exports = {
    getAllBlogs,
    createBlog,
};
