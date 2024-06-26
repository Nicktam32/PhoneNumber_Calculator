var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET old_version page. */
router.get('old_version', function(req, res, next) {
  res.render('old_version', { title: 'Express' });
});

module.exports = router;
