import { TStudent } from "./students.interface";
import {Student } from "./students.model";



const getAllStudentFromDb = async()=>{
    const result = await Student.find()
    return result;
    }

    const getSingleStudentFromDb = async (id: string) => {
        const result = await Student.aggregate([{ $match: { id } }]);
        return result;
      };
      const deleteStudentFromDb = async (id: string) => {
        const result = await Student.updateOne({ id }, { isDeleted: true });
        return result;
      };
export const StudentService = {
    getAllStudentFromDb,
    getSingleStudentFromDb,
    deleteStudentFromDb
}
