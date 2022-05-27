"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
exports.default = (app) => {
    app.get("/user", user_controller_1.readAll);
    app.post("/user", user_controller_1.createUser);
};
