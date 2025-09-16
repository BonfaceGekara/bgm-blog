const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Blog = require('./models/Blog');
const blogRoutes = require('./routes/blogRoutes');

const dbUrl = "mongodb+srv://root:root@bonny001.3pg8e.mongodb.net/bgm-blogs?retryWrites=true&w=majority&appName=Bonny001";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(dbUrl)
    .then(()=>{
        app.listen(3000);
        console.log('Connected to DB!');
    })
    .catch((err)=>{
        console.error('DB Connection failed!',err);
    });

app.get('/blogs', async (req,res) => {
    try {
        const blogs = (await Blog.find());
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message : 'Server error'});
    }
});

app.use('/blog',blogRoutes);