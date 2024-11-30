import { Request, Response } from "express";

const createStudent = (req: Request, res: Response)=>{

    const student = req.body;
    // will call service function to to send this db
     
}
export const StudentControllers = {
    createStudent
  };