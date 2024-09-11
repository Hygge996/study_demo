const fs = require('fs')

const rs = fs.createReadStream('./流式写入练习.text')

const ws = fs.createWriteStream('./流式写入练习-copy1.text')

rs.on('data', chunk => {
  ws.write(chunk);
})