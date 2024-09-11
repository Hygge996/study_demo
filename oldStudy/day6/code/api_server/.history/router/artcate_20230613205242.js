const express = require('express')

// 创建路由对象
const router = express.Router()


// 获取文章分类的列表数据
router.get('/cates', (req, res) => {
  res.send('OK')
})