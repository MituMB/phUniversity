import { Request, Response } from "express";
import { StudentService } from "./students.service";
import studentValidationSchema from "./students.validation";

const createStudent = async(req: Request, res: Response)=>{

  try {
    const student = req.body;
    // will call service function to to send this db
    const zodParsedData = studentValidationSchema.parse(student);

    const result = await StudentService.createStudentToDb(zodParsedData)
  //send response
  res.status(200).json({
    success:true,
    message:"Student created Successfully",
    data:result
  })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
}
const getAllStudent = async(req: Request, res: Response)=>{

  try {
    // will call service function to to send this db
    const result = await StudentService.getAllStudentFromDb()
  //send response
  res.status(200).json({
    success:true,
    message:"Student found",
    data:result
  })
  } catch (error) {
    console.log(error);
    
  }
}

const getSingleStudent = async(req: Request, res: Response)=>{
  try {
    const studentid = req.params.studentId;
    // will call service function to to send this db
    const result = await StudentService.getSingleStudentFromDb(studentid)
  //send response
  res.status(200).json({
    success:true,
    message:"Specific Student retrived Successfully",
    data:result
  })
  } catch (error) {
    console.log(error);
    
  }
}

export const StudentControllers = {
    createStudent,
    getAllStudent,
    getSingleStudent
  };