const mongoose = require('mongoose')


// Schema 
const episodeSchema = new mongoose.Schema({
    // userName: {type: String, required: true},
 episodeId: {type:String}
})


const Episode = mongoose.model('Episode', episodeSchema)

module.exports = Episode
