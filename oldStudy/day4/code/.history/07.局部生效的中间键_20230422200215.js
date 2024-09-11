// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 定义一个中间键函数
const mw1 = () => {
  
}

// 调用 app.listen 方法，指定端口号并启动 web 服务器
app.listen(80, function() {
  console.log('http://127.0.0.1')
})

