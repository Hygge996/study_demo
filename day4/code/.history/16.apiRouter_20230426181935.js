const express = require('express')

const router = express.Router()


// 挂载对应路由
router.get('/get', (req, res) => {
  // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query
  // 调用 res.send() 方法，向客户端响应处理的结果
  res.send({
    status: 0, //0 表示处理成功 1表示处理失败
    msg: 'GET 请求成功！', // 状态的描述
    data: query
  })
})
module.exports(router)