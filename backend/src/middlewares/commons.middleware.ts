import { Application } from "express";
const cors = require("cors");

const commonMiddlewares = (app: Application) => {
    app.use(cors())
}

export default commonMiddlewares;