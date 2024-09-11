const path = require('path');

// 定义文件存放路径
const fpath = '/a/b/c/index.html'

const fallName = path.basename(fpath)

console.log(fallName)

const fallName2 = path.basename(fpath, '.html')

console.log(fallName2)