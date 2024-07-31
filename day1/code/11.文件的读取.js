const fs  = require('fs')

// fs.readFile('./流式写入练习.text', (err, data) => {
//   if (err) {
//     console.log(err);
//     console.log('文件读取失败！');
//     return;
//   }
//   console.log(data.toString());
// })

const data = fs.readFileSync('./流式写入练习.text')
console.log(data.toString());