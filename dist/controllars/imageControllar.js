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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageBuilder = exports.ImageResizer = exports.ImageFinder = void 0;
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = require("fs");
class ImageFinder {
}
exports.ImageFinder = ImageFinder;
ImageFinder.find = (path) => {
    return (0, fs_1.existsSync)(path);
};
class ImageResizer {
}
exports.ImageResizer = ImageResizer;
_a = ImageResizer;
ImageResizer.resize = (readPath, writePath, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, sharp_1.default)(readPath)
        .resize(parseInt(width), parseInt(height))
        .toFile(writePath);
});
class ImageBuilder {
}
exports.ImageBuilder = ImageBuilder;
_b = ImageBuilder;
ImageBuilder.build = (readPath, writePath, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    if (!ImageFinder.find(writePath)) {
        yield ImageResizer.resize(readPath, writePath, width, height);
        return true;
    }
    return false;
});
