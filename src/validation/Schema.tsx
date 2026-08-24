import { z } from "zod";

export const LSchema = z.object({
    username: z.string()
        .min(5, { message: "Min of 5 Characters" }),
    password: z.string()
        .min(5, { message: "Min of 5 Characters" }),
});

export type LType = z.infer<typeof LSchema>;



