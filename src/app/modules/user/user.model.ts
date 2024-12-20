import bcrypt from 'bcrypt';
import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
const userSchema = new Schema<TUser>({

    id: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      needPasswordChange:{
        type: Boolean,
        default: true,
      },
      role:{
        type:String,
        enum:['admin','student','faculty']
      },
      status:{
        type:String,
        enum:['in-progress','blocked'],
        default:'in-progress'
      },
      isDleted:{
        type: Boolean,
        default: false,
      }
},

{
    timestamps:true
}
)  
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(process.env.bcrypt_salt_rounds),
  );
  next();
});

// set '' after saving password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});
export const UserModel = model<TUser>('User', userSchema);