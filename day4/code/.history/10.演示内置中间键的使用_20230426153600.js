const express = require('express')

const app = express()

app.post('/user', (req, res) => {
  res.send('OK!')
})

app.listen(80, (req, res) => {
  console.log('http://127.0.0.1')
})