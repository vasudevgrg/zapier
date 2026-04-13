import * as z from 'zod';


export const signUpObject = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(5)
}) 

export const signInObject = z.object({
    email: z.email(),
    password: z.string().min(5)
}) 