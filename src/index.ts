import cors from 'cors';
import express, {  Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './db';
import { StudentRoutes } from './app/modules/students/students.route';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/errorHandler/globalErrorhandler';
import notFound from './app/errorHandler/notFound';

const app: Application = express();
dotenv.config();

//parsers
app.use(express.json());
app.use(cors());

// application routes
 app.use('/api/v1/students', StudentRoutes);
 app.use('/api/v1/users', UserRoutes);

app.get('/', (req:Request, res:Response) => {
    res.send('Hello World 2!')
  })
  
  app.use(globalErrorHandler);
  //Not Found
app.use(notFound);
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
    connectDB()
  })


