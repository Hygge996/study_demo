// 导入一个ndoe内置模块
const qs = require('querystring')


const bodyParser = (req, res, next) => {
  // 中间键的业务逻辑
  // 创建一个 str 空字符串，用来接收客户端传过来的数据请求体
  let str = ''
  // 监听req的data事件
  req.on('data', (chunk) => {
    str += chunk
  })
  // 监听 req 的 end 事件
  req.on('end', () => {
    // console.log(str)
    // TODO:把字符串格式的请求体数据，解析成对象格式
    const body = qs.parse(str)
    // console.log(body)
    req.body = body
    next()
  })
}