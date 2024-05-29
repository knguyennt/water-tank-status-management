import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors'
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express(); 
const PORT = 3555; 

app.listen(PORT);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors({ origin: '*' }));

// Proxy middleware configuration
const proxyConfig = {
  target: `http://localhost:${PORT}`,
  changeOrigin: true,
  secure: false
};

app.use('/api', createProxyMiddleware(proxyConfig));


import indexRouter from './routes/index.js';


console.log(`Server running on ${PORT}`)

app.use('/', indexRouter);

export default app;