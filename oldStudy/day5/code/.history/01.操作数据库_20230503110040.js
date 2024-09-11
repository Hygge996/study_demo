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

/* // 查询用户表中的所有数据
// 创建一个 SQL 语句
const sqlStr = 'SELECT * FROM users'
db.query(sqlStr, (err, results) => {
  // 查询失败
  if(err) return console.log(err.message)
  // 查询成功
  // 注意：如果执行的是 SELECT 查询语句，则执行的结果是数组
  console.log(results)
}) */

// 向 users 表中插入一条数据
const user = {username:'Spider-man', password:'pcc123'}
const sqlStr = 'INSERT INTO users (username, password) values (?, ?)'

db.query(sqlStr, [user.username, user.password], (err, results) => {
  // 插入数据错误
  if(err) return console.log(err.message)
  // 插入数据成功
  // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
  // 可以通过 affectedRows 属性，来判断是否插入数据成功
  if(results.affectedRows === 1) {
    console.log('插入数据成功！')
  }
})