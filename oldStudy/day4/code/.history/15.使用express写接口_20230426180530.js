const express = require('express')

const app = express()

// 调取自定义路由
const router = require('./16.apiRouter')

app.listen(80, () => {
  console.log('http://127.0.0.1')
})