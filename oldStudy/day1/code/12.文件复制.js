const fs = require('fs');

const data = fs.readFileSync('./流式写入练习.text');

fs.writeFileSync('./流式写入练习-copy.text', data);