"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertCircle } from "lucide-react"
import { useFormValidation } from "@/hooks/use-form-validation"
import { loginSchema, type LoginFormData } from "@/lib/validation"
import { supabase } from "@/lib/supabaseClient"

export function LoginForm() {
	const [loginData, setLoginData] = useState<Partial<LoginFormData>>({})
	const loginValidation = useFormValidation(loginSchema)
	const [authError, setAuthError] = useState<string | null>(null)

	const handleLoginSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (loginValidation.validate(loginData)) {
			console.log(e)
			loginValidation.setIsSubmitting(true)
			setAuthError(null)
			const { email, password } = loginData
			const { error } = await supabase.auth.signInWithPassword({
				email: email || "",
				password: password || "",
			})
			if (error) {
				setAuthError(error.message)
			} else {
				setAuthError(null)
				// Aqui você pode redirecionar ou atualizar o estado global do usuário
				console.log("Login successful:", loginData)
			}
			loginValidation.setIsSubmitting(false)
		}
	}

	return (
		<form onSubmit={(e) => handleLoginSubmit(e)} className="w-full space-y-4">
			<div>
				<Input
					placeholder="Email"
					type="email"
					className={`bg-white ${loginValidation.errors.email ? "border-red-500" : ""}`}
					value={loginData.email || ""}
					onChange={(e) => {
						setLoginData((prev) => ({ ...prev, email: e.target.value }))
						loginValidation.clearError("email")
					}}
				/>
				{loginValidation.errors.email && (
					<div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
						<AlertCircle className="w-3 h-3" />
						<span>{loginValidation.errors.email}</span>
					</div>
				)}
			</div>
			<div>
				<Input
					placeholder="Senha"
					type="password"
					className={`bg-white ${loginValidation.errors.password ? "border-red-500" : ""}`}
					value={loginData.password || ""}
					onChange={(e) => {
						setLoginData((prev) => ({ ...prev, password: e.target.value }))
						loginValidation.clearError("password")
					}}
				/>
				{loginValidation.errors.password && (
					<div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
						<AlertCircle className="w-3 h-3" />
						<span>{loginValidation.errors.password}</span>
					</div>
				)}
			</div>
			{authError && (
				<div className="flex items-center gap-1 mt-2 text-red-500 text-xs">
					<AlertCircle className="w-3 h-3" />
					<span>{authError}</span>
				</div>
			)}
			<Button
				type="submit"
				className="w-full bg-black text-white rounded-lg"
				disabled={loginValidation.isSubmitting}
			>
				{loginValidation.isSubmitting ? "Entrando..." : "Entrar"}
			</Button>
			<div className="text-center mt-4">
				<a href="/register" className="text-sm text-blue-600 hover:underline">Ainda não tem conta? Cadastre-se</a>
			</div>
		</form>
	)
}
