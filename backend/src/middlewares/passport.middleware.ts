import passport from "passport";
import { Strategy } from "passport-local";
import { findOne } from "../services/user.service";


const auth = passport.use(new Strategy(
    (username, password, done) => findOne(username).then(
        (user: any) => {
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        },
        (err: any) => {return done(err);}
    ),
    
  ));
  

export { auth }