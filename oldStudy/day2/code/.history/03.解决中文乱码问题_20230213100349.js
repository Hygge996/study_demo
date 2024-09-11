const http = require('http')
const server = http.createServer()

server.on('request', () => {})

server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})