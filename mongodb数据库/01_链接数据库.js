const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bli');

/**
 * 设置回调
 */
// 数据库打开时的回调
mongoose.connection.on('open', () => {
  console.log('链接成功');
  
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