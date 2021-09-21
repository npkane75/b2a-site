const mongoose = require('mongoose')


// Schema 
const postSchema = new mongoose.Schema({
    // userName: {type: String, required: true},
    name: {type: String, required: true},
    comment: {type: String, required: true},
    location: {type: String, required: true},
})


const Post = mongoose.model('Post', postSchema)

module.exports = Post
