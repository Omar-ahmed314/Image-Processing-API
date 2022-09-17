import { imageQueryValidator } from '../../routes/apiMiddleWares';
import { ParsedQs } from 'qs';

describe('Testing the api middleware functions', () => {
  describe('Testing the Image validator class', () => {
    let query: ParsedQs = {
      fileName: '',
      width: '',
      height: '',
    };
    describe('Testing is defined function', () => {
      it('should be invalid', () => {
        expect(imageQueryValidator.isDefinedParams(query)).toBeFalse();
      });
      it('should be valid', () => {
        query = {
          fileName: 'hi',
          width: '200',
          height: '200',
        };
        expect(imageQueryValidator.isDefinedParams(query)).toBeTrue();
      });
    });

    describe('Testing is dimension valid function', () => {
      it('the dimensions should be vaild', () => {
        query = {
          width: '200',
          height: '200',
        };
        expect(imageQueryValidator.isDimensionsValid(query)).toBeTrue();
      });
      it('the empty dimensions should be invalid', () => {
        query = {
          width: '',
          height: '',
        };
        expect(imageQueryValidator.isDimensionsValid(query)).toBeFalse();
      });
      it('the unknown dimensions 1bx & abc should be invalid', () => {
        query = {
          width: '1bx',
          height: 'abc',
        };
        expect(imageQueryValidator.isDimensionsValid(query)).toBeFalse();
      });
    });

    describe('Testing is image exist function', () => {
      it('the image fjord.jpg should be exist', () => {
        query = {
          fileName: 'fjord',
        };
        expect(imageQueryValidator.isImageExist(query)).toBeTrue();
      });
      it('the image abc.jpg should not be exist', () => {
        query = {
          fileName: 'abc',
        };
        expect(imageQueryValidator.isImageExist(query)).toBeFalse();
      });
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
