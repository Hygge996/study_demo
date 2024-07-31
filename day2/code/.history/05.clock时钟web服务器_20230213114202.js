const http = require('http')
const fs = require('fs')
const path = require('path')
const { url } = require('inspector')

const server = http.createServer

server.on('request', (req,res) => {
  // 获取客户端请求的 URL 地址
  const url = req.url
  // 把请求的 URL 地址映射为具体文件的存放路径
  const fpath = path.join(__dirname, url)

  fs.readFileSync(fpath, 'utf8', (err, dataStr) => {
    if (err) return res.end('<h1>404 Not Found!</h1>')

    res.end(dataStr)
  })
})
server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})