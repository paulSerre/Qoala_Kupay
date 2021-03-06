"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = require("express");
const commonMiddlewares = (app) => {
    app.use((0, cors_1.default)({
        credentials: true,
        origin: true,
    }));
    app.use((0, express_1.json)());
};
exports.default = commonMiddlewares;
