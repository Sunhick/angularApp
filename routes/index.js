var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout');
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/signup', function(req, res, next) {
    res.render('signup');
});

module.exports = router;
