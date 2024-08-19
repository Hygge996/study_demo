const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.set('views', path(__dirname, './views'));

app.get('/home',(req, res) => {
  res.end('hello express')
})

app.listen(3000, () => {
  console.log('启动！超级变换形态。。。');
})