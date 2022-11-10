const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate('google', {scope: ['profile']}));

router.get('/google/redirect', passport.authenticate('google', {failureRedirect: '/'}), 
    (req,res) => {
        res.redirect('/users');
    }
)

router.get('/logout', (req, res, next) => {
    req.logOut(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
})

module.exports = router;