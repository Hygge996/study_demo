const db = require('./db/db');
const BookModel = require('./models/BookModels');

db(() => {
  console.log('成功');

  BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 9.9
  }).then((data) => {
    console.log(data);
    
  }).catch((err) => {
    console.log(err);
    
  })
}, () => {
  console.log('再来一次叭！');
});