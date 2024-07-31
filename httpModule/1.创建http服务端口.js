const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.end('Hello Http Server!')
})

server.listen(9000, () => {
  console.log('服务已启动。。。');
})