var express = require('express');
const db = require('../database/db-conn')
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.send("<a href = '/auth/google'>Login using Google Auth</a> <br> <label></label>");
});

module.exports = router;

