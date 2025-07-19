import { z } from "zod"

export const loginSchema = z.object({
	email: z.string().min(1, { message: "Email é obrigatório" }).email({ message: "Email deve ser válido" }),
	password: z
		.string()
		.min(1, { message: "Senha é obrigatória" })
		.min(4, { message: "Senha deve ter pelo menos 4 caracteres" }),
})

export const registrationSchema = z
	.object({
		name: z
			.string()
			.min(1, { message: "Nome é obrigatório" })
			.min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
			.max(50, { message: "Nome deve ter no máximo 50 caracteres" }),
		email: z.string().min(1, { message: "Email é obrigatório" }).email({ message: "Email deve ser válido" }),
		password: z
			.string()
			.min(1, { message: "Senha é obrigatória" })
			.min(6, { message: "Senha deve ter pelo menos 6 caracteres" })
			.regex(/[a-zA-Z]/, { message: "Senha deve conter pelo menos uma letra" })
			.regex(/[0-9]/, { message: "Senha deve conter pelo menos um número" })
			.regex(/[^a-zA-Z0-9]/, { message: "Senha deve conter pelo menos um caractere especial" }),
		confirmPassword: z.string().min(1, { message: "Confirmação de senha é obrigatória" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Senhas não coincidem",
		path: ["confirmPassword"],
	})

export const passwordRecoverySchema = z.object({
	email: z.string().min(1, { message: "Email é obrigatório" }).email({ message: "Email deve ser válido" }),
})

export const passwordResetSchema = z
	.object({
		newPassword: z
			.string()
			.min(1, { message: "Nova senha é obrigatória" })
			.min(8, { message: "Senha deve ter pelo menos 8 caracteres" })
			.regex(/[a-zA-Z]/, { message: "Senha deve conter pelo menos uma letra" })
			.regex(/[0-9]/, { message: "Senha deve conter pelo menos um número" })
			.regex(/[^a-zA-Z0-9]/, { message: "Senha deve conter pelo menos um caractere especial" }),
		confirmNewPassword: z.string().min(1, { message: "Confirmação de senha é obrigatória" }),
	})
	.refine((data) => data.newPassword === data.confirmNewPassword, {
		message: "Senhas não coincidem",
		path: ["confirmNewPassword"],
	})

export const createAccountSchema = z
	.object({
		name: z
			.string()
			.min(1, { message: "Nome é obrigatório" })
			.min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
		email: z.string().min(1, { message: "Email é obrigatório" }).email({ message: "Email deve ser válido" }),
		password: z
			.string()
			.min(1, { message: "Senha é obrigatória" })
			.min(8, { message: "Senha deve ter pelo menos 8 caracteres" }),
		confirmPassword: z.string().min(1, { message: "Confirmação de senha é obrigatória" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Senhas não coincidem",
		path: ["confirmPassword"],
	})

export type LoginFormData = z.infer<typeof loginSchema>
export type RegistrationFormData = z.infer<typeof registrationSchema>
export type PasswordRecoveryFormData = z.infer<typeof passwordRecoverySchema>
export type PasswordResetFormData = z.infer<typeof passwordResetSchema>
export type CreateAccountFormData = z.infer<typeof createAccountSchema>
