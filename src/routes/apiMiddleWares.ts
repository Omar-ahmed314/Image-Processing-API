import express from 'express';
import { existsSync } from 'fs';
import path from 'path';
import { ParsedQs } from 'qs';

class imageQueryValidator {
  static validator() {
    return async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ): Promise<void> => {
      // check if the any params is empty
      if (!this.isDefinedParams(req.query)) next('undefined parameters');

      if (!this.isDimensionsValid(req.query)) next('Invalid Dimensions');

      if (!(await this.isImageExist(req.query))) next('Image is not exist');

      next();
    };
  }

  static isDefinedParams(query: ParsedQs): boolean {
    const { fileName, width, height } = query;
    if (!(fileName && width && height)) return false;
    return true;
  }

  static isDimensionsValid(query: ParsedQs): boolean {
    const { width, height } = query;
    if (isNaN(parseInt(width as string)) || isNaN(parseInt(height as string)))
      return false;
    return true;
  }

  static isImageExist(query: ParsedQs): boolean {
    const { fileName } = query;
    const imagePath = path.join(
      __dirname,
      '../../',
      'images',
      'originalImages',
      `${fileName}.jpg`
    );
    return existsSync(imagePath);
  }
}

export { imageQueryValidator };
