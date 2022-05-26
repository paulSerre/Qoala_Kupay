import express, { Express } from 'express';
import commonMiddlewares from "./middlewares/commons.middleware";
import http from "http";

const app: Express = express();

// Apply middlewares
commonMiddlewares(app);

const httpServer = http.createServer(app);

httpServer.listen(8080);