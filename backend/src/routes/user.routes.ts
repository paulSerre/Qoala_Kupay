
import { Express } from 'express';
import { findAll, create } from '../controllers/user.controller';

export default (app: Express) => {

    app.get("/user", findAll);

    app.post("/user", create)
}