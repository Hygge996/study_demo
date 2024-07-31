const express = require('express')

const app = express()

// 调取自定义路由
const router = require('./16.apiRouter')

// 把路由模块注册到app上
app.use('/api', router)

app.listen(80, () => {
  console.log('http://127.0.0.1')
})