const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const html = fs.readFileSync('./table.html');
  res.end(html)
})

server.listen(9000, () => {
  console.log('服务已启动... 端口9000 监听中...');
})