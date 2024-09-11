const fs = require('fs')

// fs.mkdir('./html', err => {
//   if (err) {
//     console.log('操作失败!');
//     return;
//   }
//   console.log('操作成功');
// })
/**
 * 递归操作文件夹
 */

fs.mkdir('./a/b/c', {recursive: true}, err => {
  if (err) {
    console.log('操作失败');
    return;
  }
  console.log('操作成功');
})