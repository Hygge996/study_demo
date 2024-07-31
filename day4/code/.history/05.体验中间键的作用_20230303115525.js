// 导入express 函数
const express = require('express')
const app = express()

app.use((req, res, next) => {
  req.setTimeout = time
  next()
})

app.get('/', (req, res) => {
  res.send('Home Page.')
})
app.get('/user', (req, res) => {
  res.send('User Page.')
})
app.listen(80, () => {
  console.log('http://127.0.0.1')
})