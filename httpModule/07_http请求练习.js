// 导入 http 模块
const http = require('http');

const server = http.createServer((request, response) => {
  // 获取请求方法
  let { method } = request;
  // 获取请求路径
  let { pathname } = new URL(request.url, 'http://127.0.0.1');

  response.setHeader('Content-type', 'text/html;charset=utf-8');
  // console.log(method);
  // console.log(pathname);
  if (method === 'GET' && pathname === '/login') {
    response.end('登录页面');
  } else if (method === 'GET' && pathname === '/reg') {
    response.end('注册页面');
  } else {
    response.end('404 Not Found');
  }
})

server.listen(9000, () => {
  console.log('服务已启动... 端口9000 监听中...');
})