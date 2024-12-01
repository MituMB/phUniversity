import { TStudent } from "./students.interface";
import {StudentModel } from "./students.model";

const createStudentToDb = async(student:TStudent)=>{
// const result = await StudentModel.create(student) //builtin static method
const studentData = new StudentModel(student) //builtin instance method
const result = await studentData.save();
return result;
}

const getAllStudentFromDb = async()=>{
    const result = await StudentModel.find()
    return result;
    }

    const getSingleStudentFromDb = async(id:String)=>{
        const result = await StudentModel.findOne({id})
        return result;
        }
export const StudentService = {
    createStudentToDb,
    getAllStudentFromDb,
    getSingleStudentFromDb
}
