import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors'

const app = express(); 
const PORT = 3555; 

app.listen(PORT);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors({ origin: '*' }));


import indexRouter from './routes/index.js';


console.log(`Server running on ${PORT}`)

app.use('/', indexRouter);

export default app;