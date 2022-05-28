
import { Express} from 'express';
import passport from 'passport';
import { loginstate, signin, signup } from '../controllers/login.controller';

export default (app: Express) => {

    app.post(
        "/signin", 
        passport.authenticate("local-signin"),
        signin
    );

    app.post(
        "/signup",
        signup
    )

    app.get("/checklogin", loginstate);
}