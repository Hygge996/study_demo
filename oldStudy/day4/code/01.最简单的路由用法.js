const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.post('/', (req, res) => {
  res.send('Post Request.')
})
app.listen(80, () => {
  console.log('express servec running at http://127.0.0.1')
})