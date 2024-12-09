import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserServices } from './user.service';
// import { StudentServices } from './student.service';

const createStudent :RequestHandler = async (req, res,  next) => {
  try {
    const { password,student: studentData } = req.body;
    const result = await UserServices.createStudentIntoDB(password,studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
    createStudent,

  };
  
