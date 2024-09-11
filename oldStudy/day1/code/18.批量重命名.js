const fs = require('fs')

const files = fs.readdirSync('./files');
files.forEach((item) => {
  let data = item.split('.')
  let [num, name] = data;
  if (!isNaN(Number(num))) {
    num = '0' + num
  }
  console.log(num);
  fs.renameSync(`./files/${item}`, `./files/${num}.${name}`)
})
console.log(files);