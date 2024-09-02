var express = require('express');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync( __dirname + '/../data/db.json')
const db = low(adapter)
const shortid = require('shortid')

/* 记账本列表 */
router.get('/account', function(req, res, next) {
  //获取所有的账单信息
  let accounts = db.get('accounts').value();
  res.render('list', {accounts: accounts});
});

/* 添加记录 */
router.get('/account/create', function(req, res, next) {
  res.render('create');
});

router.post('/account', (req, res) => {
  //生成 id
  let id = shortid.generate();
  //写入文件
  db.get('accounts').unshift({id:id, ...req.body}).write();
  //成功提醒
  res.render('success', {msg: '添加成功哦~~~', url: '/account'});
});

module.exports = router;
