// const db = require('../models/index.js')
// db.Episode.create( [
//             {episodeId:"iDHCHgZETw0" }
//         ]; 
        
//         (err, createdEpisode)=> {
//     if(err) return console.log(err);    
// });

// db.Episode.deleteMany({}, (err, result)=> {
//     if (err) {
//         console.log(err);
//         process.exit();
// })

const db = require('./models/index.js');
 const data = require('./gameData.json');

// Delete - Clear out the DB
db.Episode.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  
  console.log(result.deletedCount,'episodes deleted');

  // Create - Add some games to the DB
  db.Episode.create(, (err, seededGames) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    
    console.log(seededGames.length, 'games created successfully');
    console.log('done!');

    process.exit();
  });
});