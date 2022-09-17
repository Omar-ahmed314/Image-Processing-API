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
Object.defineProperty(exports, "__esModule", { value: true });
const apiMiddleWares_1 = require("../../routes/apiMiddleWares");
describe('Testing the api middleware functions', () => {
    describe('Testing the Image validator class', () => {
        let query = {
            fileName: '',
            width: '',
            height: '',
        };
        describe('Testing is defined function', () => {
            it('should be invalid', () => {
                expect(apiMiddleWares_1.imageQueryValidator.isDefinedParams(query)).toBeFalse();
            });
            it('should be valid', () => {
                query = {
                    fileName: 'hi',
                    width: '200',
                    height: '200',
                };
                expect(apiMiddleWares_1.imageQueryValidator.isDefinedParams(query)).toBeTrue();
            });
        });
        describe('Testing is dimension valid function', () => {
            it('the dimensions should be vaild', () => {
                query = {
                    width: '200',
                    height: '200',
                };
                expect(apiMiddleWares_1.imageQueryValidator.isDimensionsValid(query)).toBeTrue();
            });
            it('the empty dimensions should be invalid', () => {
                query = {
                    width: '',
                    height: '',
                };
                expect(apiMiddleWares_1.imageQueryValidator.isDimensionsValid(query)).toBeFalse();
            });
            it('the unknown dimensions 1bx & abc should be invalid', () => {
                query = {
                    width: '1bx',
                    height: 'abc',
                };
                expect(apiMiddleWares_1.imageQueryValidator.isDimensionsValid(query)).toBeFalse();
            });
        });
        describe('Testing is image exist function', () => {
            it('the image fjord.jpg should be exist', () => __awaiter(void 0, void 0, void 0, function* () {
                query = {
                    fileName: 'fjord',
                };
                expect(yield apiMiddleWares_1.imageQueryValidator.isImageExist(query)).toBeTrue();
            }));
            it('the image abc.jpg should not be exist', () => __awaiter(void 0, void 0, void 0, function* () {
                query = {
                    fileName: 'abc',
                };
                expect(yield apiMiddleWares_1.imageQueryValidator.isImageExist(query)).toBeFalse();
            }));
        });
        // describe('Testing validator function', () => {
        //   let req = {
        //     query: {
        //       fileName: '',
        //       width: '',
        //       height: '',
        //     },
        //   };
        //   it('the validator should throw undefined error', async () => {
        //     const validator = imageQueryValidator.validator();
        //     await expectAsync(
        //       validator(
        //         req as unknown as express.Request,
        //         req as unknown as express.Response,
        //         req as unknown as express.NextFunction
        //       )
        //     ).toBeRejectedWith(new Error('undefined parameters'));
        //   });
        //   it('the validator should be throw invalid dimensions', async () => {
        //     let req = {
        //       query: {
        //         fileName: 'file',
        //         width: 'abc',
        //         height: '200',
        //       },
        //     };
        //     const validator = imageQueryValidator.validator();
        //     await expectAsync(
        //       validator(
        //         req as unknown as express.Request,
        //         req as unknown as express.Response,
        //         req as unknown as express.NextFunction
        //       )
        //     ).toBeRejectedWith(new Error('Invalid Dimensions'));
        //   });
        //   it('the validator should be throw image is not exist', async () => {
        //     let req = {
        //       query: {
        //         fileName: 'file',
        //         width: '200',
        //         height: '200',
        //       },
        //     };
        //     const validator = imageQueryValidator.validator();
        //     await expectAsync(
        //       validator(
        //         req as unknown as express.Request,
        //         req as unknown as express.Response,
        //         req as unknown as express.NextFunction
        //       )
        //     ).toBeRejectedWith(new Error('Image is not exist'));
        //   });
        // });
    });
});
