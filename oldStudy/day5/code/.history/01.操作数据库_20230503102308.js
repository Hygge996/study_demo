// 1、导入mysql模块
const mysql = require('mysql')
// 2、建立mysql数据库的链接关系
const db = mysql.createPool({
  host: '127.0.0.1',//数据库的IP地址
  user: 'root', //数据的账户名
  password: '1234', //数据的密码
  database: 'my_db_01' //指定要操作的数据库
})

/* // 测试 mysql 模块是否链接成功并正常工作
db.query('SELECT 1', (err, results) => {
  // 如果 mysql 模块没有正常工作则报错并把报错信息发送出来
  if(err) return console.log(err.message)
  //如果模块正常工作，则把结果打印出来
  console.log(results)
}) */