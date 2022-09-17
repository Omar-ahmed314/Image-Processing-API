"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageRouter = express_1.default.Router();
imageRouter.get('/image', (req, res) => {
    res.send('<h2> images API </h2>');
});
exports.default = imageRouter;
