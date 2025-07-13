import { z } from "zod";

export const userSchema = z.object({
	name: z.string().min(2, "Nome muito curto"),
	email: z.string().email("E-mail inválido"),
	password: z.string().min(6, "Senha muito curta"),
});

export type UserSchema = z.infer<typeof userSchema>;
