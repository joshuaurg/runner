var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('entry/login', { title: '登录' });
});

router.get('/home', function(req, res, next) {
  res.render('entry/home', { title: '登录' });
});

router.get('/photos', function(req, res, next) {
  res.render('entry/photos', { title: '登录' });
});


module.exports = router;
