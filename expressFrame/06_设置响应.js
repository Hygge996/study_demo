const express = require('express')

const app = express();

app.get('/response',(req, res) => {
  // res.statusCode = 404;
  // res.statusMessage = 'nice';
  // res.setHeader('xxx', 'yyy');
  // res.write('hello express');
  // res.end('response');

  // express 响应
  res.status(500);
  res.set('aaa', 'bbb');
  res.send('你好 express')
})

app.listen(3000, () => {
  console.log('启动！超级变换形态。。。');

})