/* eslint-disable no-unused-vars */
import express, { Application, urlencoded, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(globalErrorHandler);
app.get('/', (req: Request, res: Response) => {
  // res.send('Hello World!');
  Promise.reject(new Error('unhandled'));
});

export default app;
