var express = require('express');
var router = express.Router();

router.get('/reg', (req, res) => {
  res.render('auth/auth')
})

module.exports = router;
