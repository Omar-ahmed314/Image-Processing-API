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
const imageControllar_1 = require("../../controllars/imageControllar");
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
describe("Testing Image Controller Module", () => {
    const mainPath = '../../..';
    describe("Testing ImageFinder class", () => {
        it("Image fjord should be found", () => {
            const readPath = path_1.default.join(__dirname, mainPath, 'images', 'originalImages', 'fjord.jpg');
            expect(imageControllar_1.ImageFinder.find(readPath)).toBeTrue();
        });
        it("Image abc should not be found", () => {
            const readPath = path_1.default.join(__dirname, mainPath, 'images', 'originalImages', 'abc.jpg');
            expect(imageControllar_1.ImageFinder.find(readPath)).toBeFalse();
        });
    });
    describe("Testing ImageResizer class", () => {
        const readPath = path_1.default.join(__dirname, mainPath, 'images', 'originalImages', 'fjord.jpg');
        const writePath = path_1.default.join(__dirname, mainPath, 'images', 'cachedImages', 'fjord_200_200.jpg');
        it("Image fjord_200_200 should be resized", () => __awaiter(void 0, void 0, void 0, function* () {
            yield imageControllar_1.ImageResizer.resize(readPath, writePath, "200", "200");
            expect(imageControllar_1.ImageFinder.find(writePath)).toBeTrue();
        }));
        afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
            yield fs_1.promises.unlink(writePath);
        }));
    });
    describe("Testing ImageBuilder class", () => {
        const readPath = path_1.default.join(__dirname, mainPath, 'images', 'originalImages', 'fjord.jpg');
        const writePath = path_1.default.join(__dirname, mainPath, 'images', 'cachedImages', 'fjord_200_200.jpg');
        it("Image fjord_200_200 should be resized and created", () => __awaiter(void 0, void 0, void 0, function* () {
            expect(yield imageControllar_1.ImageBuilder.build(readPath, writePath, "200", "200")).toBeTrue();
        }));
        it("Image fjord_200_200 should not be created again", () => __awaiter(void 0, void 0, void 0, function* () {
            expect(yield imageControllar_1.ImageBuilder.build(readPath, writePath, "200", "200")).toBeFalse();
        }));
        afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
            yield fs_1.promises.unlink(writePath);
        }));
    });
});
