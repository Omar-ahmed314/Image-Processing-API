import express from 'express';
import {promises as fs} from 'fs';
import path from 'path';
import { ParsedQs } from 'qs';

class imageQueryValidator {

   static validator () {
        return async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
            // check if the any params is empty
            if(!this.isDefinedParams(req.query))
            throw new Error('undefined parameters');

            if(!this.isDimensionsValid(req.query))
            throw new Error('Invalid Dimensions');

            if(! await this.isImageExist(req.query))
            throw new Error('Image is not exist');

            next();
        }
    }

    static isDefinedParams (query: ParsedQs): boolean {
        const {fileName, width, height} = query;
        if(!(fileName && width && height))
            return false;
        return true;
    }

    static isDimensionsValid (query: ParsedQs): boolean {
        const {width, height} = query;
        if(isNaN(parseInt(width as string)) || isNaN(parseInt(height as string)))
        return false;
        return true;
    }

    static async isImageExist (query: ParsedQs): Promise<boolean> {
        try {
            const {fileName} = query;
            const imagePath = path.join(__dirname, '../../', 'images', 'originalImages', fileName as string + '.jpg');
            const image = await fs.readFile(imagePath);
        } catch (err) {
            return false;
        }
        return true;
    }
    
}


export {
    imageQueryValidator
};
