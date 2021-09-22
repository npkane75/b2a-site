const express = require('express');
const db = require('../models');
const router = express.Router();



// router.get('/', (req, res) => {
//   res.send('hello world')
// })


// Index Route - Retrieve many/all posts
router.get('/', (req, res) => {
  db.Post.find({}, (err, allPosts)=> {
    if (err) return console.log(err);

    res.render('index.ejs', {
allPosts: allPosts
    }); 
  });
});

 

// New Route - send a form page that can be used to create a new posts
router.get('/new', (req, res) => {
  res.render('new.ejs');
});

// Show Route - Retrieve one post  pass id?
// router.get('/edit', (req, res) => {
//   res.send('Hello World')

// })

// Create Route - Send data to create new post it adds to database and redirects
router.post('/', (req, res) => {
  db.Post.create(req.body,(err, createdPost)=> {
    // if (err) return console.log(err);
    console.log(req.body)
    res.render('index.ejs');
  });
});

//Show info on one post
router.get('/:id', (req, res) => {
  db.Post.findById(req.params.id)
  .populate('posts')
  .exec((err, foundPost)=>{
    if (err) return console.log(err);
    
    console.log(foundPost); 

    res.render('show.ejs',{post: postCreated });
  });
});


// //retrieve edit form for retrieved blog
// router.get('/:id/edit', (req, res) => { 
//   res.render('edit.ejs')
// })

//will update a particular blog and then redirect
router.put('/:id', (req, res) => {
  db.Post.create(req.body, (err, createdPost) => {
    if (err){return console.log(err)} 

console.log(createdPost);

res.redirect('show.ejs');
  });
});



//delete a particular blog then redirect
router.delete('/:id', (req, res) => {
  db.Post.findByIdAndRemove(req.params.id, (err) => {
		if (err) return console.log(err);

		res.redirect('/new.ejs');
	});
});

module.exports = router;

/*
C - Create
R - Read
U - Update
D - Delete
*/ 