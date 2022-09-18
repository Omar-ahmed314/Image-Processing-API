"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiMiddleWares_1 = require("./apiMiddleWares");
const imageControllar_1 = require("../controllars/imageControllar");
const path_1 = __importDefault(require("path"));
// routers
const imageRouter = express_1.default.Router();
// const
const mainPath = `${__dirname}/../../`;
imageRouter.get('/', (req, res) => {
    res.status(200).send('<h2> api router </h2>');
});
imageRouter.get('/image', apiMiddleWares_1.imageQueryValidator.validator(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fileName, width, height } = req.query;
    const readPath = path_1.default.join(mainPath, 'images', 'originalImages', `${fileName}.jpg`);
    const writePath = path_1.default.join(mainPath, 'images', 'cachedImages', `${fileName}_${width}_${height}.jpg`);
    yield imageControllar_1.ImageBuilder.build(readPath, writePath, width, height);
    res.status(200).sendFile(writePath);
}));
imageRouter.use((err, req, res, next) => {
    res.status(401).send(err);
});
exports.default = imageRouter;
