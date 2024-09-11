function dateFormat(dateStr) {
  const dt = new Date(dateStr)

  const y = dt.getFullYear()
  const m = padZero(dt.getMonth() + 1)
  const d = padZero(dt.getDay())

  const HH = padZero(dt.getHours())
  const MM = padZero(dt.getMinutes())
  const SS = padZero(dt.getSeconds())

  return `${y}-${m}-${d} ${HH}:${MM}:${SS}`
}

function padZero(n) {
  return n > 9 ? n : '0' + n
}


// 定义转义 HTML 字符的函数
function htmlEscape(htmlStr) {
  return htmlStr.replace(/<|>|"|&|/g, (match) => {
    switch (match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case '&':
        return '&amp;'
    }
  })
}
module.exports = {
  dateFormat
  htmlEscape
}