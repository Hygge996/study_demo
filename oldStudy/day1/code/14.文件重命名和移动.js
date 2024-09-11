const fs = require('fs')

fs.rename('./静夜思.text', './静夜思.txt', err => {
  if (err) {
    console.log('重命名失败');
    return;
  }
  console.log('重命名成功');
})