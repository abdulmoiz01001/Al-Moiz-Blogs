const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dobcljwkq',
  api_key: '739649368583556',
  api_secret: 'I-xAZuCfViV57oanjTLZXFri8jg',
});

// Set up Multer storage with Cloudinary

module.exports =  cloudinary ;
