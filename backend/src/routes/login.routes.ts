
import { Express} from 'express';
import passport from 'passport';
import { login } from '../controllers/login.controller';

export default (app: Express) => {

    app.post(
        "/signin", 
        passport.authenticate("local-signin"),
        login
    );
}