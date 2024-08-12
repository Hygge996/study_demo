const express = require('express');
const app = express();
const homeRouter = require('./routes/homeRouter')
const adminRouter = require('./routes/adminRouter')

app.use(homeRouter);
app.use(adminRouter);


app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>');
})

app.listen(3000, () => {
  console.log('启动！超级变换形态。。。');
})