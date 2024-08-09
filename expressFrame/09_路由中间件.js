const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// 声明中间件函数
const midFunc = (req, res, next) => {
  let { url, ip } = req;
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `时间：${new Date()} ${url} ${ip}\r\n`)

  next();
};

// 路由中间件
const checkCodeMiddleware = (req, res, next) => {
  if (req.query.code === '521') {
    next();
  } else {
    res.send('天王盖地虎！')
  }
};

app.use(midFunc);

app.get('/home', (req, res) => {
  res.send('首页');
})
app.get('/about', checkCodeMiddleware, (req, res) => {
  res.send('关于');
})
app.get('/setting', checkCodeMiddleware, (req, res) => {
  res.send('设置页面');
})
app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>');
})

app.listen(3000, () => {
  console.log('启动！超级变换形态。。。');
})