const express = require('express')
const app = express()


// 定义一个全局中间键
// 这是一个解析表单数据的中间键
app.use()

app.post('/', (req, res) => {
  res.send(req.body)
})
app.listen(80, (req, res) => {
  console.log('http://127.0.0.1')
})