const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

console.log(process.env.GOOGLE_CLIENT_ID);

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/google/redirect"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));

passport.serializeUser((user,done) => {
    done(null,user);
});
  
  passport.deserializeUser((user,done) => {
    done(null,user)
});