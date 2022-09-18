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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../index"));
const superTest = (0, supertest_1.default)(index_1.default);
describe("Testing the Rest API", () => {
    it("it should return status code 200 success", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield superTest.get('/api').query({
            fileName: 'jford',
            width: '200',
            height: '200'
        });
        expect(res.status).toEqual(200);
    }));
    it("it should return status code 401 fail", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield superTest.get('/api/image').query({
            fileName: 'jford',
            width: '200',
            height: 'abc'
        });
        expect(res.status).toEqual(401);
    }));
    it("it should return status code 200 success", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield superTest.get('/api/image').query({
            fileName: 'fjord',
            width: '200',
            height: '200'
        });
        expect(res.status).toEqual(200);
    }));
});
