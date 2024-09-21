var express = require('express');
var router = express.Router();

//导入 moment
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');

//记账本的列表
router.get('/account', function(req, res, next) {
  //获取所有的账单信息
  // let accounts = db.get('accounts').value();
  //读取集合信息
  AccountModel.find().sort({time: -1}).exec().then((data) => {
    //响应成功的提示
    res.json({
      code: '0000',
      msg: '请求成功<(￣︶￣)↗[GO!]',
      data
    });
  }).catch((err) => {
    res.json({
      code: '1002',
      // 响应信息
      msg: '读取失败＞﹏＜',
      // 响应数据
      data: null
    });
    return;
  })
});

//添加记录
router.get('/account/create', function(req, res, next) {
  res.render('create');
});

//新增记录
router.post('/account', (req, res) => {
  console.log(req.body);
  const { title, type, account } = req.body
  // 添加拦截校验等功能用的代码，测试练习
  // if (type === 1) {
  //   res.json({
  //     code: '1001',
  //     // 响应信息
  //     msg: '创建失败＞﹏＜',
  //     // 响应数据
  //     data: null
  //   });
  //   return
  // }
  
  
  //插入数据库
  AccountModel.create({
    ...req.body,
    //修改 time 属性的值
    time: moment(req.body.time).toDate()
  })
  .then((data) => {
    //成功提醒
    res.json({
      // 响应编号
      code: '0000',
      // 响应信息
      msg: '创建成功<(￣︶￣)↗[GO!]',
      // 响应数据
      data
    });
  })
  .catch ((err) => {
    res.json({
      code: '1001',
      // 响应信息
      msg: '创建失败＞﹏＜',
      // 响应数据
      data: null
    });
    return
  })
});

//删除记录
router.delete('/account/:id', (req, res) => {
  //获取 params 的 id 参数
  let id = req.params.id;
  //删除
  AccountModel.deleteOne({_id: id}).then((data) => {
    //提醒
    res.json({
      code: '0000',
      msg: '删除成功<(￣︶￣)↗[GO!]',
      data
    });
  }).catch((err) => {
    res.json({
      code: '1003',
      // 响应信息
      msg: '删除失败＞﹏＜',
      // 响应数据
      data: null
    });
    return;
  })
});

// 获取单个账单列表
router.get('/accounts/:id', (req, res) => {
  const { id } = req.params;
  AccountModel.findById(id).then((data) => {
    res.json({
      code: '0000',
      msg: `获取账单成功`,
      data
    })
  }).catch(() => {
    res.json({
      code: '1004',
      msg: '获取单个账单失败',
      data: null
    })
  })
})

module.exports = router;
