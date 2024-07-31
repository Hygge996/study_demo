// 导入 http 模块
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8');  
  res.statusCode = 200;
  res.statusMessage = 'test';
  res.end('res');
})

server.listen(9000, () => {
  console.log('服务已启动... 端口9000 监听中...');
})