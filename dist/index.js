"use strict";
/**
 * This project is an image processing api used to resize a given image with a specific ratio
 * @author: Omar Ahmed
 * @version: 1.0
 * @Date : 2022/09/17
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const app = (0, express_1.default)();
const PORT = (process.env.PORT || 3000);
// middleware usage
app.use('/api', api_1.default);
// home endpoint
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Image Processing API</h1>');
});
app.listen(PORT, () => {
    console.log(`listining to port ${PORT} successfully`);
});
exports.default = app;
