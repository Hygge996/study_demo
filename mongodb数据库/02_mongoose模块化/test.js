const db = require('./db/db');
const MovieModel = require('./models/MovieModel');

db(() => {
  MovieModel.create({
    name: '肖申克的救赎',
    director: ''
  })
  .then((data) => {
    console.log(data);
    
  }).catch((err) => {
    console.log(err);
    
  })
}, () => {
  console.log('再来一次叭！');
});