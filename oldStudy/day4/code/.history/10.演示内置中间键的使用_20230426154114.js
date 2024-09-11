const express = require('express')

const app = express()

app.post('/user', (req, res) => {
  // 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据
  console.log(req.body)
  res.send('OK!')
})

app.listen(80, (req, res) => {
  console.log('http://127.0.0.1')
})