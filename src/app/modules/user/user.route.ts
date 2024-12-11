import express, {Request, Response, NextFunction } from 'express';
import { UserControllers } from './user.controller';
const router = express.Router()

//army middleware

const army = (req: Request, res: Response, next: NextFunction) => {
console.log(req.body);

next()
}

//account creation
router.post('/create-student',army, UserControllers.createStudent);


export const UserRoutes = router;