"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertCircle } from "lucide-react"
import { useFormValidation } from "@/hooks/use-form-validation"
import { registrationSchema, type RegistrationFormData } from "@/lib/validation"
import { supabase } from "@/lib/supabaseClient"

export function RegisterForm() {
	const [formData, setFormData] = useState<Partial<RegistrationFormData>>({})
	const validation = useFormValidation(registrationSchema)
	const [authError, setAuthError] = useState<string | null>(null)
	const [success, setSuccess] = useState<boolean>(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setSuccess(false)
		if (validation.validate(formData)) {
			validation.setIsSubmitting(true)
			setAuthError(null)
			const { email, password } = formData
			const { error } = await supabase.auth.signUp({
				email: email || "",
				password: password || "",
			})
			if (error) {
				setAuthError(error.message)
			} else {
				setAuthError(null)
				setSuccess(true)
				// Aqui você pode redirecionar ou mostrar mensagem de sucesso
			}
			validation.setIsSubmitting(false)
		}
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)} className="w-full space-y-4">
			<div>
				<Input
					placeholder="Email"
					type="email"
					className={`bg-white ${validation.errors.email ? "border-red-500" : ""}`}
					value={formData.email || ""}
					onChange={(e) => {
						setFormData((prev) => ({ ...prev, email: e.target.value }))
						validation.clearError("email")
					}}
				/>
				{validation.errors.email && (
					<div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
						<AlertCircle className="w-3 h-3" />
						<span>{validation.errors.email}</span>
					</div>
				)}
			</div>
			<div>
				<Input
					placeholder="Senha"
					type="password"
					className={`bg-white ${validation.errors.password ? "border-red-500" : ""}`}
					value={formData.password || ""}
					onChange={(e) => {
						setFormData((prev) => ({ ...prev, password: e.target.value }))
						validation.clearError("password")
					}}
				/>
				{validation.errors.password && (
					<div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
						<AlertCircle className="w-3 h-3" />
						<span>{validation.errors.password}</span>
					</div>
				)}
			</div>
			<div>
				<Input
					placeholder="Confirmar senha"
					type="password"
					className={`bg-white ${validation.errors.confirmPassword ? "border-red-500" : ""}`}
					value={formData.confirmPassword || ""}
					onChange={(e) => {
						setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))
						validation.clearError("confirmPassword")
					}}
				/>
				{validation.errors.confirmPassword && (
					<div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
						<AlertCircle className="w-3 h-3" />
						<span>{validation.errors.confirmPassword}</span>
					</div>
				)}
			</div>
			{authError && (
				<div className="flex items-center gap-1 mt-2 text-red-500 text-xs">
					<AlertCircle className="w-3 h-3" />
					<span>{authError}</span>
				</div>
			)}
			{success && (
				<div className="flex items-center gap-1 mt-2 text-green-600 text-xs">
					<span>Cadastro realizado! Verifique seu e-mail.</span>
				</div>
			)}
			<Button
				type="submit"
				className="w-full bg-black text-white rounded-lg"
				disabled={validation.isSubmitting}
			>
				{validation.isSubmitting ? "Cadastrando..." : "Cadastrar"}
			</Button>
			<div className="text-center mt-4">
				<a href="/login" className="text-sm text-blue-600 hover:underline">Já tenho conta</a>
			</div>
		</form>
	)
}
