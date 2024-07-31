// 1、导入mysql模块
const mysql = require('mysql')
// 2、建立mysql数据库的链接关系
const db = mysql.createPool({
  host: '127.0.0.1',//数据库的IP地址
  user: 'root', //数据的账户名
  password: '1234', //数据的密码
  database: 'my_db_01' //指定要操作的数据库
})