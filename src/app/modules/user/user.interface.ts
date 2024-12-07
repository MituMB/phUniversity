//interface,schema+model,validation,refactor validation

export type TUser = {
 id:string,
 password:string,
 needPasswordChange:boolean,
 role:'admin'|'student'|'faculty',
 status:'in-progress'|'blocked',
 isDleted:boolean
  };


//   export type NewUser = {
//     password:string,
//     role:string,
//     id:string,

//   }