import express from 'express';
import { imageQueryValidator } from './apiMiddleWares';
import path from 'path';

// routers
const imageRouter = express.Router();

// const
const mainPath = '../../';

imageRouter.get('/', (req: express.Request, res: express.Response) => {
  res.send('<h2> api router </h2>');
});

imageRouter.get(
  '/image',
  imageQueryValidator.validator(),
  (req: express.Request, res: express.Response) => {
    res.send('<h2> image holder </h2>');
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
