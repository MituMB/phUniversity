// import cors from 'cors';
import express, {  Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './db';

const app = express();
dotenv.config();

//parsers
app.use(express.json());
// app.use(cors());

// application routes
// app.use('/api/v1', router);

app.get('/', (req:Request, res:Response) => {
    res.send('Hello World 2!')
  })
  

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
    connectDB()
  })


