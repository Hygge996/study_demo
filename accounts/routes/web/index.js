const express = require('express');
// 路由检测中间件
let checkSessionMiddleware = require('../../middlewares/checkLogin');
//导入 moment
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');

const router = express.Router();
// 首页
router.get('/', (_, res) => {
  // 重定向
  res.redirect('/account');
})

//测试
// console.log(moment('2023-02-24').toDate())
//格式化日期对象
// console.log(moment(new Date()).format('YYYY-MM-DD'));

//记账本的列表
router.get('/account', checkSessionMiddleware, function(req, res, next) {
  //获取所有的账单信息
  // let accounts = db.get('accounts').value();
  //读取集合信息
  AccountModel.find().sort({time: -1}).exec().then((data) => {
    //响应成功的提示
    res.render('list', {accounts: data, moment: moment});
  }).catch((err) => {
    res.status(500).send('读取失败~~~');
    return;
  })
});

//添加记录
router.get('/account/create', checkSessionMiddleware, function(req, res, next) {
  res.render('create');
});

//新增记录
router.post('/account', checkSessionMiddleware, (req, res) => {
  //插入数据库
  AccountModel.create({
    ...req.body,
    //修改 time 属性的值
    time: moment(req.body.time).toDate()
  })
  .then((data) => {
    //成功提醒
    res.render('success', {msg: '添加成功哦~~~', url: '/account'});
  })
  .catch ((err) => {
    res.status(500).send('插入失败~~');
    return
  })
});

//删除记录
router.get('/account/:id', checkSessionMiddleware, (req, res) => {
  //获取 params 的 id 参数
  let id = req.params.id;
  //删除
  AccountModel.deleteOne({_id: id}).then((data) => {
    //提醒
    res.render('success', {msg: '删除成功~~~', url: '/account'});
  }).catch((err) => {
    res.status(500).send('删除失败~');
    return;
  })
});

module.exports = router;
