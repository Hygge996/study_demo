const fs = require('fs')

fs.stat('./流式写入练习-copy.text', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data)
  console.log(data.isFile());
  console.log(data.isDirectory());
})