// 导入express 函数
const express = require('express')
const app = express()

app.use((req, res, next) => {
  // 为 req 挂载自定义属性，从而把时间共享给后面的路由
  req.startTime = time
  next()
})

app.get('/', (req, res) => {
  res.send('Home Page.' + req.startTime)
})
app.get('/user', (req, res) => {
  res.send('User Page.' + req.startTime)
})
app.listen(80, () => {
  console.log('http://127.0.0.1')
})