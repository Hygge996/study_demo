var express = require('express');
const md5 = require('md5');

var router = express.Router();

const UserModel  = require('../../models/UserModel');
// 注册页
router.get('/reg', (req, res) => {
  res.render('auth/auth')
})

// 注册
router.post('/reg', (req, res) => {
  UserModel.create({ ...req.body, password: md5(req.body.password)}).then((data) => {
    res.render('success', { msg: '注册成功', url: '/login'});
  }).catch(() => {
    res.status(500).send('注册失败')
  })
})

// 登录页
router.get('/login', (req, res) => {
  res.render('auth/login')
})
// 登录
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  UserModel.findOne({ username: username, password: md5(password)}).then((data) => {
    console.log(data);
    
    if (!data) return res.send('登录失败')
    res.render('success', { msg: '登录成功', url: '/account'});
  }).catch(() => {
    res.status(500).send('登录失败')
  })
})

module.exports = router;
