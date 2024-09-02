const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)

// db.defaults({ post: [], user: {}}).write()

// // Add a post
// db.get('post').push({ id: 1, name: '11'}).write()

// 获取单条数据
/* let res = db.get('post').find({ id: 1}).value()
console.log(res);
console.log(db.get('post').value()); */
// 删除数据
db.get('post').remove({ id: 1 }).write()


