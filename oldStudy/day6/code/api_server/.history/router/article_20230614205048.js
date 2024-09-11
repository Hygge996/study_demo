// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()

router.post('/add', (req, res) => {
  res.send('ok')
})

// 向外共享路由对象
module.exports = router