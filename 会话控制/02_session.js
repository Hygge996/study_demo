const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

// 设置 session 中间件
app.use(session({
  name: 'sid', //设置cookie的name，默认值是：connect.sid
  secret: 'atguigu', //参与加密的字符串（又称签名）
  saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
  resave: true, //是否在每次请求时重新保存session
  store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/bilibili' //数据库的连接配置
  }),
  cookie: {
    httpOnly: true, // 开启后前端无法通过 JS 操作
    maxAge: 1000 * 30 // 这一条 是控制 sessionID 的过期时间的！！！
  },
}))
// 首页路由
app.get('/', (req, res) => {
  res.send('home');
})

// 登录
app.get('/login', (req, res) => {
  if (req.query.username === 'admin' && req.query.password === 'admin') {
    req.session.username = 'admin'
    res.send('登录成功！')
  } else {
    res.send('登录失败！')
    return;
  }
})

// session 的读取
app.get('/cart', (req, res) => {
  if (req.session.username) {
    res.send('登录成功，欢迎光临')
  } else {
    res.send('登录失败')
    return
  }
})

//销毁 session
app.get('/logout', (req, res) => {
  //销毁session
  // res.send('设置session');
  req.session.destroy(() => {
  res.send('成功退出');
  });
  });  

app.listen(3000);