import { z } from 'zod';
const userValidationSchema = z.object({
  // id: z.string(),
  password: z
    .string({
        invalid_type_error:"password must be string"
    })
    .max(10, { message: 'password length should be 10 character' })
    .optional(),
//   needPasswordChange: z.boolean().optional().default(true),
//   role: z.enum(['admin', 'student', 'faculty']),
//   status: z.enum(['in-progress', 'blocked']).default('in-progress'),
//   isdeleted: z.boolean().optional().default(false),
});

export const UserValidation = {
  userValidationSchema,
};
