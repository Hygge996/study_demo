const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer

server.on('request', (req,res) => {

})
server.lsiten(80, () => {
  console.log('server running at http://127.0.0.1)
})