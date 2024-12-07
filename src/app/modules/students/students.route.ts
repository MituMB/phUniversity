import express from 'express';
import { StudentControllers } from './students.controller';


const router = express.Router();

// will call controller func
// router.post('/create-student', StudentControllers.createStudent)
router.get('/allstudent', StudentControllers.getAllStudent)
router.get('/:studentId', StudentControllers.getSingleStudent)

export const StudentRoutes = router;