import express from 'express';
import path from 'path';

// routers
const imageRouter = express.Router();

// const
const mainPath = '../../';

imageRouter.get('/', (req: express.Request, res: express.Response) => {
    res.send('<h2> api router </h2>');
});

imageRouter.get('/image', (req: express.Request, res: express.Response) => {
   
});

export default imageRouter;