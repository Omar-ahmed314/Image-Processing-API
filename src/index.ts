/**
 * This project is an image processing api used to resize a given image with a specific ratio
 * @author: Omar Ahmed
 * @version: 1.0
 * @Date : 2022/09/17
 */

import express from 'express';
import imageRouter from './routes/api';

const app = express();
const PORT: number = (process.env.PORT || 3000) as number;

// middleware usage
app.use('/api', imageRouter);

// home endpoint
app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('<h1>Welcome to Image Processing API</h1>');
});

app.listen(PORT, (): void => {
  console.log(`listining to port ${PORT} successfully`);
});
