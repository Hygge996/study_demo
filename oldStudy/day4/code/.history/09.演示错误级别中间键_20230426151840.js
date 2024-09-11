const express = requirs('express')

 const app = express()

//  1、定义一个路由
 app.get('/', (req, res) => {
  throw new Error('服务器内部发生了错误！')
 })

 app.use('/', (err, req, res, next) => {
  console.log('发生了错误' + err.message)
  res.send('Error:' + err.message)
  next()
 })
 app.listen(80, (req, res) => {
  console.log('http://127.0.0.1')
 })