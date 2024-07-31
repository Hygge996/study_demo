const express = require('express')
const app = express()


// 定义一个全局中间键
// 这是一个解析表单数据的中间键
app.use((req, res, next) => {
  // 中间键的业务逻辑
  // 创建一个 str 空字符串，用来接收客户端传过来的数据请求体
  let str = ''
  // 监听req的data事件
  req.on('data', (chunk) => {

  })
})
app.listen(80, (req, res) => {
  console.log('http://127.0.0.1')
})