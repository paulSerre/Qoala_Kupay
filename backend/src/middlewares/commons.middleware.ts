import cors from "cors";
import { Express, json } from "express";

const commonMiddlewares = (app: Express) => {
    app.use(cors({
        credentials: true,
        origin: true,
    }))
    app.use(json())
}

export default commonMiddlewares;