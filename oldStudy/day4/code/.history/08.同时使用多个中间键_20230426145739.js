// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 定义一个中间键函数
const mw1 = (req, res, next) => {
  console.log('调用了局部生效的中间键函数')
}
const mw2 = (req, res, next) => {
  console.log('第二个中间键')
}

// 创建一个路由
app.get('/', mw1,mw2, (req, res) => {
  res.send('Home Page!')
})

app.get('/user', (req, res) => {
  res.send('User Page!')
})

// 调用 app.listen 方法，指定端口号并启动 web 服务器
app.listen(80, function() {
  console.log('http://127.0.0.1')
})

