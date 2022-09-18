import express from 'express';
import { imageQueryValidator } from './apiMiddleWares';
import { ImageBuilder } from '../controllars/imageControllar';
import path from 'path';

// routers
const imageRouter = express.Router();

// const
const mainPath = `${__dirname}/../../`;

imageRouter.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('<h2> api router </h2>');
});

imageRouter.get(
  '/image',
  imageQueryValidator.validator(),
  async (req: express.Request, res: express.Response) => {
    const { fileName, width, height } = req.query;
    const readPath = path.join(
      mainPath,
      'images',
      'originalImages',
      `${fileName}.jpg`
    );
    const writePath = path.join(
      mainPath,
      'images',
      'cachedImages',
      `${fileName}_${width}_${height}.jpg`
    );
    await ImageBuilder.build(
      readPath,
      writePath,
      width as string,
      height as string
    );
    res.status(200).sendFile(writePath);
  }
);

imageRouter.use(
  (
    err: string,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(401).send(err);
  }
);

export default imageRouter;
