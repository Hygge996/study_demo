// 导入fs 模块
const fs = require('fs')

// 导入 path 模块
const path = require('path')

// 匹配 <style></style> 标签的正则
// 其中 \s 表示空白字符； \S 表示非空白字符；* 表示匹配任意次数
const regStyle = /<style>[\s\S]*<\/style>/
// 匹配<script></script> 标签正则
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, '../sourceMaterial/index.html'), 'utf8', function(err, dataStr){
  // 2.2 读取文件失败
  if(err) return console.log('读取文件失败！' + err.message)
  // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出 css,js,html 文件
  resolveCSS(dataStr)
  // return console.log('读取文件成功！')
  resolveJS(dataStr)
  resolveHTML(dataStr)
})

// 3.1 定义处理 css 样式的方法
function resolveCSS(htmlStr) {
  // 3.1.2 使用正则提取需要的内容
  const r1 = regStyle.exec(htmlStr)
  // console.log(r1)
  // 3.1.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
  const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
  // return console.log(newCSS)
  fs.writeFile(path.join(__dirname,'./clock/index.css'), newCSS, function (err) {
    if (err) return console.log('写入CSS内容失败！' + err.message)
    console.log('写入CSS内容成功！')
  })
}

// 3.2 定义处理 js 样式的方法
function resolveJS(htmlStr) {
  const r2 = regScript.exec(htmlStr)
  const newJS = r2[0].replace('<script>', '').replace('</script>', '')
  fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err) {
    if(err) return console.log('写入JS文件失败！' + err.message)
    console.log('写入 JS 文件成功！')
  })
}

// 3.3 定义处理 html 结构的方法
function resolveHTML(htmlStr) {
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')

  fs.writeFile(path.join(__dirname, './clock/index.html'),newHTML, function(err) {
    if(err) return console.log('写入 HTML 结构文件失败！' + err.message)
    console.log('写入 HTML 结构文件成功！')
  })
}