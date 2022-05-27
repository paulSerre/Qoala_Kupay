import express, { Express } from 'express';
import commonMiddlewares from "./middlewares/commons.middleware";
import userRoutes from './routes/user.routes';
import http from "http";
import {connection} from "./models/connection"

const app: Express = express();

const httpServer = http.createServer(app);

connection.sync().then(
    () => {
        // Apply middlewares
        commonMiddlewares(app);

        userRoutes(app);

        httpServer.listen(8080, () => console.log(`Server running on ${process.env.API_URL}:${process.env.PORT}`));

    },
    (err) => console.log(err)
)
