// 导入express 函数
const express = require('express')
const app = express()

// 创建一个最简单的中间键
// 必须要有这个 next ，有了next 这个参数才是一个真正的中间键
const mw = function(req, res, next) {
  console.log('这是一个最简单的中间键函数')
  next()
}
app.listen(80, () => {
  console.log('http://127.0.0.1')
})