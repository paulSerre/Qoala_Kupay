"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commons_middleware_1 = __importDefault(require("./middlewares/commons.middleware"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const http_1 = __importDefault(require("http"));
const connection_1 = require("./models/connection");
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const passport_middleware_1 = require("./middlewares/passport.middleware");
const auth_middleware_1 = require("./middlewares/auth.middleware");
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
connection_1.connection.sync().then(() => {
    // Apply middlewares
    (0, commons_middleware_1.default)(app);
    (0, passport_middleware_1.sessionMiddleware)(app);
    app.use((0, auth_middleware_1.authMiddleware)());
    (0, login_routes_1.default)(app);
    (0, user_routes_1.default)(app);
    httpServer.listen(8080, () => console.log(`Server running`));
}, (err) => console.log(err));
