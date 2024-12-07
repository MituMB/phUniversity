// import { StudentModel } from '../student.model';
// import { Student } from './student.interface';
import { TStudent } from '../students/students.interface';
import { Student } from '../students/students.model';
import { TUser } from './user.interface';
// import { NewUser, TUser } from './user.interface';
import { UserModel } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
//create user object
  const userData:Partial<TUser> = {}

//if password is not given, use default password
userData.password = password || (process.env.DEFAULT_PASS as string)
// if(!password){
//   user.password = process.env.DEFAULT_PASS as string
// }else{
//   user.password = password
// }

//set student role
userData.role = "student"

//set manually id
userData.id = '2024001'

//create  a user
  const newUser = await UserModel.create(userData);

//create a student
if(Object.keys(newUser).length){
  //set id, _id as user
  studentData.id = newUser.id;
  studentData.user = newUser._id //reference _id
}
const newStudent = await Student.create(studentData)
  return newStudent;
};

export const UserServices = {
  createStudentIntoDB,
};
