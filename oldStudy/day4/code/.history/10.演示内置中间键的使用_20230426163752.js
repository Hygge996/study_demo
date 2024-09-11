const express = require('express')

const app = express()

// 注意：除了错误级别的中间键之外，其他的中间键，必须在路由之前进行配置
// 通过 express.json()这中间键，解析表单中的JSON 格式的数据
app.use(express.json())


app.post('/user', (req, res) => {
  // 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据
  // 默认情况下，如果不配置解析表单的数据中间键，则 req.body 默认等于 undefined
  console.log(req.body)
  res.send('OK!')
})

app.listen(80, (req, res) => {
  console.log('http://127.0.0.1')
})