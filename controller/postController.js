const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');


router.get('/', (req, res) => {
  res.send('hello world')
})


// Index Route - Retrieve many/all posts
router.get('/postIndex', (req, res) => {
  res.send("hello world");
})

// New Route - Retrieve a form that can be used to create a new posts
router.get('/new', (req, res) => {
  res.send('hello world')
})

// Show Route - Retrieve one post  pass id?
// router.get('/edit', (req, res) => {
//   res.send('Hello World')

// })

// Create Route - Send data to create new post it adds to database and redirects
router.post('/postIndex', (req, res) => {
  // We need to harvest the data from the form
  res.send('hello world')
})

//Show info on one post
router.get('/:id', (req, res) => {
  res.send('hello world')
})

//show edit form for retrieved blog
router.get('/:id/edit', (req, res) => {
  res.send('hello world')
})

//will update a particular blog and then redirect
router.put('/:id', (req, res) => {
  res.send('hello world')
})
//delete a particular blog then redirect
router.delete('/:id', (req, res) => {
  res.send('hello world')
})
module.exports = router;

/*
C - Create
R - Read
U - Update
D - Delete
*/