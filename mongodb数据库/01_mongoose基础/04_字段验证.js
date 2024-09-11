const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bli');

/**
 * 设置回调
 */
// 数据库打开时的回调
mongoose.connection.on('open', () => {
  console.log('链接成功');
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
  })

  let BookModel = mongoose.model('book', BookSchema);

  BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 9.9
  }).then((data) => {
    console.log(data);
    
  }).catch((err) => {
    console.log(err);
    
  })
});
// 数据库链接错误时的回调
mongoose.connection.on('error', () => {
  console.log('链接失败');
});
// 数据库关闭时的回调
mongoose.connection.on('close', () => {
  console.log('链接关闭');
});

setTimeout(() => {
  mongoose.disconnect();
}, 2000)