// 导入 http 模块
const http = require('http');

const server = http.createServer((request, response) => {
  response.end('practise');
})

server.listen(9000, () => {
  console.log('服务已启动... 端口9000 监听中...');
})