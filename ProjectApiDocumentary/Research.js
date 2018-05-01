var mongoose = require('mongoose');
var genreSchema = mongoose.Schema({
    name: {
      type: String,
      required: 'Kindly enter the name of the task'
    },
    Created_date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [{
        type: String,
        enum: ['pending', 'ongoing', 'completed']
      }],
      default: ['pending']
    }
  });

  var Genre = module.exports = mongoose.model('Genre', genreSchema);
  
 // module.exports = mongoose.model('Tasks', TaskSchema);

  //Get Genres
  module.exports.getGenres = function(callback,limit){
    console.log("Yes it is accessed");
      Genre.find(callback).limit(limit);
  };