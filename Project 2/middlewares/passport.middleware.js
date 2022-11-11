const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../database/db-conn');

console.log(process.env.GOOGLE_CLIENT_ID);

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/google/redirect"
  },
  async function(accessToken, refreshToken, profile, cb) {
    const user = await db.searchData('oauth2',{sub:profile._json.sub});
      if(user.length>0){
        return cb(null,user[0]);
      }
    else {
      payload = profile._json;
      const newUser = await db.insertData('oauth2',payload);
      return cb(null,payload);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});