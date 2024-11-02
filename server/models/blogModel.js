// /models/blogModel.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true , unique: true},
    subtitle: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
