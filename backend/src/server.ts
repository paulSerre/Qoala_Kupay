import express, { Express, Request, Response } from 'express';
import commonMiddlewares from "./middlewares/commons.middleware";
import userRoutes from './routes/user.routes';
import http from "http";
import {connection} from "./models/connection"
import { auth } from './middlewares/passport.middleware';

const app: Express = express();

const httpServer = http.createServer(app);

connection.sync().then(
    () => {
        // Apply middlewares
        commonMiddlewares(app);
        //app.use(auth.authenticate("local", { session: false}))

        userRoutes(app);

        httpServer.listen(8080, () => console.log(`Server running`));

    },
    (err) => console.log(err)
)
