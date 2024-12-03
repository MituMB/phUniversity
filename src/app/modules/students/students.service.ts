import { TStudent } from "./students.interface";
import {Student } from "./students.model";

const createStudentToDb = async(student:TStudent)=>{
// const result = await StudentModel.create(student) //builtin static method
const studentData = new Student(student) //builtin instance method
if(studentData.isUserExists()){
    throw new Error('user already exists')
}
const result = await studentData.save();
return result;
}

const getAllStudentFromDb = async()=>{
    const result = await Student.find()
    return result;
    }

    const getSingleStudentFromDb = async(id:String)=>{
        const result = await Student.findOne({id})
        return result;
        }
export const StudentService = {
    createStudentToDb,
    getAllStudentFromDb,
    getSingleStudentFromDb
}
