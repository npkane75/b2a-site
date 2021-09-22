const express = require('express');
const db = require('../models');
const router = express.Router();



router.get('/', (req, res) => {
  res.send('hello world')
})


// Index Route - Retrieve many/all posts
router.get('/', (req, res) => {
  res.send("hello world");
})

// New Route - Retrieve a form that can be used to create a new posts
router.get('/new', (req, res) => {
  // db.Post.create(req.body, (err, createdPost)=>{
  //   if (err) return console.log(err)
  //   console.log(createdPost)
    res.render('new.ejs')

  // })
})

// Show Route - Retrieve one post  pass id?
// router.get('/edit', (req, res) => {
//   res.send('Hello World')

// })

// Create Route - Send data to create new post it adds to database and redirects
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('hello world')
})

//Show info on one post
router.get('/:id', (req, res) => {
  db.Post.findbyId(req.params.id, (err, foundPost)=>{
    if (err) return console.log(err)  
  })
  res.redirect('/', {onePost: foundPost}) 
})


//retrieve edit form for retrieved blog
router.get('/:id/edit', (req, res) => { 
  res.render('edit.ejs')
})

//will update a particular blog and then redirect
router.put('/:id', (req, res) => {
  db.Post.create(req.body, (err, createdPost) => {
    if (err){return console.log(err)} 

console.log(createdPost);

res.redirect('show.ejs');
  })
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