"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiMiddleWares_1 = require("./apiMiddleWares");
// routers
const imageRouter = express_1.default.Router();
// const
const mainPath = '../../';
imageRouter.get('/', (req, res) => {
    res.send('<h2> api router </h2>');
});
imageRouter.get('/image', apiMiddleWares_1.imageQueryValidator.validator(), (req, res) => {
    res.send('<h2> image holder </h2>');
});
imageRouter.use((err, req, res, next) => {
    res.status(401).send(err);
});
exports.default = imageRouter;
