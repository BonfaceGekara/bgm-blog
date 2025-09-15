const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title : String,
    sub_title : String,
    content : String,
    posted_by: String,
    date_posted : Date
});

module.exports = mongoose.model('Blog',blogSchema,'blogs');