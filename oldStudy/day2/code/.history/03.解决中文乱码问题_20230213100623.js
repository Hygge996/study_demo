const http = require('http')
const server = http.createServer()

server.on('request', (rep,res) => {
  const str = `您请求的 URL 地址是 ${req.url}，请求的 method 类型为 ${req.method}。`
})

server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})