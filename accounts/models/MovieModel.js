const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
  name: String,
  director: String
})

const MovieModel = mongoose.model('movie', MovieSchema);

module.exports = MovieModel;