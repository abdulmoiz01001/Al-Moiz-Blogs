const express = require('express');
require('dotenv').config();
const cors = require('cors');
const  blogRouter  = require('./routes/BlogRoutes.js');
const { mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;
// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cors(
    {
    origin: [process.env.CORS_ORIGIN],
    methods: ['GET', 'POST', 'PUT', 'PATCH' , 'DELETE'],
    credentials: true
}
));

app.use(cookieParser());

// Basic Route
app.use('/api/blog', blogRouter);



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

mongoose.connect(MONGO_URI).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err);
});