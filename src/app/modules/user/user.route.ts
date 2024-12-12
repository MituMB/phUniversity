import express, {Request, Response, NextFunction } from 'express';
import { UserControllers } from './user.controller';
import { AnyZodObject } from 'zod';
import { studentValidationSchema } from '../students/students.validation';
const router = express.Router()

//army middleware

const validate = (schema: AnyZodObject) => {
return async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.body);
    // console.log(`i m ${name}`);
    
    // next()
    try {
        await schema.parseAsync({
            body: req.body
        })

        next()
    } catch (err) {
        next(err)
    }


} 
} 

//account creation
router.post('/create-student',validate(studentValidationSchema),UserControllers.createStudent);


export const UserRoutes = router;