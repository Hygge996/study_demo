var express = require('express');
var router = express.Router();

/* 记账本列表 */
router.get('/account', function(req, res, next) {
  res.render('list');
});

/* 添加记录 */
router.get('/account/create', function(req, res, next) {
  res.render('create');
});

router.post('/account', (req, res, next) => {
  console.log(req.body);
  
  res.send('添加记录')
})

module.exports = router;
