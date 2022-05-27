import passport from "passport";
import { Express } from "express";
import { Strategy } from "passport-local";
import { findByEmail, findById } from "../services/user.service";
import { Model } from "sequelize/types";
import { User } from "../models/User.model";
import session from "express-session";



// Let's define a local authentification strategy.
passport.use("local-signin", new Strategy(
    (username, password, done) => findByEmail(username).then(
        (user: Model<User, any> | null) => {
            if (!user) { return done(null, false, { message: "User does not exist" }); }
            if (password !== user.getDataValue("password")) { return done(null, false, { message: "Unvalid password" }); }
            return done(null, user);
        },
        (err: any) => {return done(err);}
    )
));

passport.serializeUser(function(user, done) {
    // @ts-ignore
    done(null, user.id);
    });

passport.deserializeUser((id: string, done: Function) => {
    // @ts-ignore
    findById(+id).then((err, user) => done(err, user))
    });


const sessionMiddleware = (app: Express) => {
    app.use(session({
        secret: "test"  // Save auth in cookies
    })).use(
        passport.initialize()   // Init retrieve session data from cookies (serializers)
    ).use(
        passport.session()  // Use passport session strategy
    );
}
   
  

export { sessionMiddleware }