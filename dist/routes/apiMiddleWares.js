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
exports.imageQueryValidator = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
class imageQueryValidator {
    static validator() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            // check if the any params is empty
            if (!this.isDefinedParams(req.query))
                next('undefined parameters');
            if (!this.isDimensionsValid(req.query))
                next('Invalid Dimensions');
            if (!(yield this.isImageExist(req.query)))
                next('Image is not exist');
            next();
        });
    }
    static isDefinedParams(query) {
        const { fileName, width, height } = query;
        if (!(fileName && width && height))
            return false;
        return true;
    }
    static isDimensionsValid(query) {
        const { width, height } = query;
        if (isNaN(parseInt(width)) || isNaN(parseInt(height)))
            return false;
        return true;
    }
    static isImageExist(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { fileName } = query;
                const imagePath = path_1.default.join(__dirname, '../../', 'images', 'originalImages', fileName + '.jpg');
                const image = yield fs_1.promises.readFile(imagePath);
            }
            catch (err) {
                return false;
            }
            return true;
        });
    }
}
exports.imageQueryValidator = imageQueryValidator;
