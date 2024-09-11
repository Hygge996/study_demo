// import fs from 'fs'
const fs = require('fs')

const ws = fs.createWriteStream('./流式写入练习.text')

ws.write('床前明月光\n')
ws.write('疑是地上霜\n')
ws.write('举头望明月\n')
ws.write('低头思故乡\n')