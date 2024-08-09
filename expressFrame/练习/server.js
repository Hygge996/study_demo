const express = require('express')

const app = express();

// 设置静态资源中间件
app.use(express.static(__dirname + '/静态文件'))

app.listen(3000, () => {
  console.log('启动！超级变换形态。。。');
})