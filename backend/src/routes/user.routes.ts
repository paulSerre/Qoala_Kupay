
import { Express } from 'express';
import { readAll, createUser } from '../controllers/user.controller';

export default (app: Express) => {

    app.get("/user", readAll);

    app.post("/user", createUser)
}