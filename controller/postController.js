const express = require('express');
const db = require('../models/index.js');
const router = express.Router();



// router.get('/', (req, res) => {
//   res.send('hello world')
// })


// Index Route - Retrieve many/all posts base route
router.get('/', (req, res) => {
  db.Post.find({}, (err, allPosts)=> {
    if (err) return console.log(err);

    res.render('newhomepage.ejs', {
allPosts: allPosts
    }); 
  });
});

 

// New Route - send a form page that can be used to create a new posts
router.get('/new', (req, res) => {
  res.render('new.ejs');
});


// Create Route - Send data to create new post it adds to database and redirects
router.post('/', (req, res) => {
  db.Post.create(req.body,(err, createdPost)=> {
     if (err) return console.log(err);
     console.log(createdPost)
    res.redirect('/b2a/'+ createdPost._id);
  });
  console.log(req.body)
});

//Show info on one post
router.get('/:id', (req, res) => {
    db.Post.findById(req.params.id, (err, showPost) => {
      if (err) return console.log(err)
      console.log(req.params.id)
      console.log('hello',showPost)
      res.render('show.ejs', { onePost: showPost})
  })
   
})


// //retrieve edit form for retrieved blog
router.get('/:id/edit', (req, res) => {
  db.Post.findById(req.params.id, (err, showPost) => {
      if (err) return console.log(err)
      res.render('edit.ejs', { onePost: showPost})
  })
})


//will update a particular blog and then redirect
router.put('/:id', (req, res) => {
  db.Post.findByIdAndUpdate(req.params.id, req.body, (err, updatedPost) => {
      if (err) return console.log(err)
      res.redirect('/b2a/' + updatedPost._id)
  })
  console.log(req.body);
})




//delete a Post and then redirect
router.delete('/:id', (req, res) => {
 console.log(req.params.id)
 console.log('you hit the delete route')
  db.Post.findByIdAndDelete(req.params.id, (err) => {
		if (err) return console.log(err);

		res.redirect('/b2a');
	});
 
});

module.exports = router;

/*
C - Create
R - Read
U - Update
D - Delete
*/ 