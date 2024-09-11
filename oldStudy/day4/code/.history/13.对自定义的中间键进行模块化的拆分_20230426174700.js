const express = require('express')
const app = express()

// 导入自定义的模块处理函数
const moduleBodyParser = require('./14.custom-body-parser')
// 定义一个全局中间键
// 这是一个解析表单数据的中间键

// 调用自定义的模块
app.use(moduleBodyParser)

app.post('/', (req, res) => {
  res.send(req.body)
})
app.listen(80, (req, res) => {
  console.log('http://127.0.0.1')
})