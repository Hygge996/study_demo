const JB105 = require('./JB105-tools/index')

// 格式化时间的功能
const dtStr= JB105.dateFormat(new Date())

console.log(dtStr)

const htmlStr = '<h1 style="abc">这是h1标签<span>123&nbsp</span></h1>'
const str = JB105.htmlEscape(htmlStr)
console.log(str)