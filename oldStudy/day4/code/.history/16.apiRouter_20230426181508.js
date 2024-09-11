const express = require('express')

const router = express.Router()


// 挂载对应路由
router.get('/get', (req, res) => {
  // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
  const query = router.query
})
module.exports(router)