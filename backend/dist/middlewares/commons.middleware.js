"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const commonMiddlewares = (app) => {
    app.use(cors());
};
exports.default = commonMiddlewares;
