// 导入express 函数
const express = require('express')
const app = express()
// 4~14是第一种方法，分两步注册生效全局中间键
// 创建一个最简单的中间键
// 必须要有这个 next ，有了next 这个参数才是一个真正的中间键
// const mw = function(req, res, next) {
  // console.log('这是一个最简单的中间键函数')
  // 把流转关系转给下一个中间键或路由
  // next()
// }

// 使用use 函数将中间键注册为全局生效的中间键
// app.use(mw)


// 第二种方法：简化中间键的全局生效函数
app.use(() => {})

app.get('/', (req, res) => {
  res.send('Home Page.')
})
app.get('/user', (req, res) => {
  res.send('User Page.')
})
app.listen(80, () => {
  console.log('http://127.0.0.1')
})