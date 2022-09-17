"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// routers
const imageRouter = express_1.default.Router();
// const
const mainPath = '../../';
imageRouter.get('/', (req, res) => {
    res.send('<h2> api router </h2>');
});
imageRouter.get('/image', (req, res) => {
});
exports.default = imageRouter;
