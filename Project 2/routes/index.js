var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("<a href = '/auth/google'>Login using Google Auth</a>");
});

module.exports = router;

