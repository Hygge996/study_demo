/**
 * 
 * @param {*} success 数据库链接成功回调
 * @param {*} error 数据库链接失败回调
 */
function db(success, error) {
  const mongoose = require('mongoose');
  const {DBHOST, DBPORT, DBNAME} = require('../config/config.js');

  mongoose.set('strictQuery', true);

  //3. 连接 mongodb 服务                        数据库的名称
  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

  /**
   * 设置回调
   */
  // 数据库打开时的回调
  mongoose.connection.once('open', () => {
    console.log('链接成功');
    success();
  });
  // 数据库链接错误时的回调
  mongoose.connection.on('error', () => {
    console.log('链接失败');
    error();
  });
  // 数据库关闭时的回调
  mongoose.connection.on('close', () => {
  console.log('链接关闭');
  });
}

module.exports = db