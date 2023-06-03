const blogPost = require('../models/postModel');



blogPost.create({
    title: 'Article1',
    description: "This is Article 1"
}, {new:  true})

