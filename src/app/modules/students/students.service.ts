import { TStudent } from "./students.interface";
import {Student } from "./students.model";

const createStudentToDb = async(student:TStudent)=>{
    if(await Student.isUserExists(student.id)){
        throw new Error('user already exists')
    }
const result = await Student.create(student) //builtin static method




//const studentData = new Student(student) //builtin instance method
// if(await studentData.isUserExists(student.id)){
//     throw new Error('user already exists')
// }
// const result = await studentData.save();
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
