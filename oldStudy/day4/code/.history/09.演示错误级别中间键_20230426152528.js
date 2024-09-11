const express = requirs('express')

 const app = express()

//  1、定义一个路由
 app.get('/', (req, res) => {
  // 1.1、人为的制造一个错误
  throw new Error('服务器内部发生了错误！')
  res.send('Home Page')
 })


//  2、定义错误级别的中间键，捕获整个项目的错误，从而防止整个程序的崩溃
 app.use((err, req, res, next) => {
  console.log('发生了错误' + err.message)
  res.send('Error:' + err.message)
  next()
 })
 app.listen(80, (req, res) => {
  console.log('http://127.0.0.1')
 })