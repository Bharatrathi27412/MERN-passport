const e = require('express');
var express = require('express');
const passport = require('passport');
var router = express.Router();

/* GET users listing. */
router.get('/',
  // passport.authenticate('google', {session:true}),
  function(req, res, next) {
    if(req.isAuthenticated()){
      console.log(req.user.name);
      return res.send('respond with a resource<br><a href="/auth/logout">logout</a>');
    }
    else {
      return res.send('unauthorized');
    }
});

module.exports = router;
