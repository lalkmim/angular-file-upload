var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Process Street - File Upload to Wistia' });
});

module.exports = router;
