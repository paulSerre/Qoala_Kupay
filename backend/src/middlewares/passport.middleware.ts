import passport from "passport";
import { Express } from "express";
import { Strategy } from "passport-local";
import {  findByEmail, findById } from "../services/user.service";
import { Error, Model } from "sequelize/types";
import UserDAO, { User } from "../models/User.model";
import session from "express-session";
import { cipher } from "../utils/aes256";



// Let's define a local authentification strategy.
passport.use("local-signin", new Strategy(
    {
        usernameField: "email",
    },
    (username, password, done) => {findByEmail(username).then(
        (user: UserDAO | null) => {
            if (!user) { return done(null, false, { message: "User does not exist" }); }
            if (password !== cipher.decrypt(user.getDataValue("password"))) { return done(null, false, { message: "Unvalid password" }); }
            return done(null, user);
        },
        (err: any) => {return done(err);}
    )}
));

passport.serializeUser(function(user, done) {
    // @ts-ignore
    done(null, user.userId);
    });

passport.deserializeUser((id: string, done: Function) => {
    // @ts-ignore
    findById(+id).then(
        (user: Model<User,User> | null) => done(null, user),
        (err: Error) => done(err)
    )
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