const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate('google', {scope: ['profile']}));

router.get('/google/redirect', passport.authenticate('google', {failureRedirect: '/', successRedirect:'/users'}), 
    (req,res) => {
        res.redirect('/users');
    }
)

module.exports = router;