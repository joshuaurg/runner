var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('entry/login', { title: '登录' });
});

router.get('/home', function(req, res, next) {
  res.render('entry/home', { title: '登录' });
});

module.exports = router;
