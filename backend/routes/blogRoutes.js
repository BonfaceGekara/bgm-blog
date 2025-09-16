const express = require('express');
const Blog = require('../models/Blog');

const router = express.Router();

router.get('/readmore/:id',async (req,res)=>{
    try{
        const blog = await(Blog.findById(req.params.id));
        res.json(blog);
    } catch (err) {
        console.error("Error found!", err);
    }
});

module.exports = router;