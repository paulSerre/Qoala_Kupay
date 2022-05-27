import express, { Express, Request, Response } from 'express';
import commonMiddlewares from "./middlewares/commons.middleware";
import userRoutes from './routes/user.routes';
import http from "http";
import {connection} from "./models/connection"
import loginRoutes from './routes/login.routes';
import { sessionMiddleware } from './middlewares/passport.middleware';
import { authMiddleware } from './middlewares/auth.middleware';

const app: Express = express();

const httpServer = http.createServer(app);

connection.sync().then(
    () => {
        // Apply middlewares
        commonMiddlewares(app);
        sessionMiddleware(app);
        app.use(authMiddleware())

        loginRoutes(app);
        userRoutes(app);

        httpServer.listen(8080, () => console.log(`Server running`));

    },
    (err) => console.log(err)
)
