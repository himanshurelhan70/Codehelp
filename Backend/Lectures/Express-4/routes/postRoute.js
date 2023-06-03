const express = require('express');
const router = express.Router();



// import controller
const blogPost = require('../controllers/postController');


Router.get('createBlog', blogPost);


module.exports = Router;