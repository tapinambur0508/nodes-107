import path from 'node:path';

import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';

import routes from './routes/index.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const app = express();

app.use('/avatars', express.static(path.resolve('src/public/avatars')));

app.use(cors());
app.use(cookieParser());

app.use('/api', routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
