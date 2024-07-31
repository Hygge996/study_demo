const express = require('express')

const app = express()

app.use(function(req, res, next){
  console.log('调用了第一个中间键')
  next()
})

app.use((req, res, next) => {
  console.log('调用了第二个中间键')
  next()
})

// 定义一个路由
app.get('/user', (req, res) => {
  res.send('User Page.')
})
app.listen(80, (req, res) => {
  console.log('exprss server running at http://127.0.0.1')
})