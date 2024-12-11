import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserServices } from './user.service';
import catchAsync from '../../utils/catchAsync';
// import { StudentServices } from './student.service';

const createStudent  = catchAsync(async (req, res,  next) => {

    const { password,student: studentData } = req.body;
    const result = await UserServices.createStudentIntoDB(password,studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
})

export const UserControllers = {
    createStudent,
  };
  
