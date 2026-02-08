import {z} from 'zod';

export const signinSchema = z.object({
    identifier: z
        .string()
        .min(3, {message: "Identifier must be at least 3 characters long"})
        .max(50, {message: "Identifier must be at most 50 characters long"}),
});