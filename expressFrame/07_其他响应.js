const express = require('express');

const app = express();

app.get('/other', (req, res) => {
  res.redirect('http://baidu.com');
})

app.listen(3000, () => {
  console.log('启动！超级变换形态。。。');
})