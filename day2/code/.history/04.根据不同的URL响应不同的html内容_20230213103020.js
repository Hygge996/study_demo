const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
})

server.listen(80, () => {
  console.log('http server running at http://127.0.0.1')
})