// REQUIRED MODULES ////////////
require('dotenv').config()
const express = require('express')
const rowdy = require('rowdy-logger')
const methodOverride = require('method-override')


// VARIABLES //////////////
const app = express()
const PORT = 4000
const rowdyResults = rowdy.begin(app)
const postController = require('./controller/postController')
const episodeController = require('./controller/episodeController')

//////////MIDDLEWARE///////////
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))
// urlencoded has to go above app.use 'CONTROLLER' to add to db //////////
app.use(express.urlencoded({ extended: false })) /// allows create route to Adds to DB
app.use(express.static('public'))
app.use('/b2a', postController);  //required to connect the controller to the application

//Homepage/////////
app.get('/' , (req, res) => {
    res.render('newhomepage.ejs')
})

/// START SERVER ////////////
app.listen(process.env.PORT || 3710, () => {
    console.log(` 🎨 💿 👨‍🎤 The server is running on port: ${PORT} 🎨 💿 👨‍🎤 `);
    rowdyResults.print()
})