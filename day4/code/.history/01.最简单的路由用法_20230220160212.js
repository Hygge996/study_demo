const express = require('express')

const app = express()

app.get('/', (req, res) => {})

app.listen(80, () => {
  console.log('express servec running at http://127.0.0.1')
})