import cors from "cors";
import { Express, json } from "express";

const commonMiddlewares = (app: Express) => {
    app.use(cors())
    app.use(json())
}

export default commonMiddlewares;