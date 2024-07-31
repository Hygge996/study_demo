const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const user_handler = require('../router_handler/user')

// 1. 导入验证数据的中间件
const expressJoi = require('@escook/express-joi')
// 2. 导入需要的验证规则对象
const { reg_login_schema } = require('../schema/user')

// 导入配置文件
const config = requier('../config.js')
// 解析 token 的中间件
const expressJWT = requier('express-jwt')
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.user(expressJWT({ secret: config.jwtSecretKey, algorithms: ['HS256']}.unless({ path: /^\/api\//})))

// 注册新用户
router.post('/reguser', expressJoi(reg_login_schema), user_handler.regUser)
// 登录
router.post('/login', expressJoi(reg_login_schema), user_handler.login)

module.exports = router
