const express = require('express')
const app = express()


// 导入解析表单数据的中间件 body-parser
const parser = require('body-parser')
// 使用 app.use() 注册中间件
app.use(parser.urlencoded({ extended: false}))
app.post('/user', (req, res) => {

  console.log(req.body)
  res.send('ok')
})
app.listen(80, (req, res) => {
  console.log('http://127.0.0.1')
})