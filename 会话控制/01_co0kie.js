const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// 设置 cookie-parser 中间件
app.use(cookieParser)

// 设置cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('name', 'zhangsan')
  res.cookie('email', '110@qq.com', { maxAge: 3 * 1000 });
  res.send('home');
})
// 读取 cookie
app.get('/get-cookie', (req, res) => {
  console.log(req.cookies);
  res.send(`Cookie的读取数-${req.cookies}`)
})
// 删除 cooklie
app.get('/del-cookie', (req, res) => {
  res.clearCookie('name', 'zhangsan')
  res.send('清除 cookie');
})

app.listen(3000);