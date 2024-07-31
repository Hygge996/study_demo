const fs = require('fs')

// fs.unlink('./流式写入练习', err => {
//   if (err) {
//     console.log('删除失败');
//     return;
//   }
//   console.log('删除成功');
// })
fs.writeFile('./16.文件操作.js', `const fs = require('fs')`, err => {
  if (err) {
    console.log('操作失败');
    return;
  }
  console.log('操作成功');
})