"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Edit3, Share2, MoreHorizontal, AlertCircle } from "lucide-react"
import { useFormValidation } from "@/hooks/use-form-validation"
import {
	loginSchema,
	registrationSchema,
	passwordRecoverySchema,
	passwordResetSchema,
	createAccountSchema,
	type LoginFormData,
	type RegistrationFormData,
	type PasswordRecoveryFormData,
	type PasswordResetFormData,
	type CreateAccountFormData,
} from "@/lib/validation"

export default function Component() {
	// Form states
	const [loginData, setLoginData] = useState<Partial<LoginFormData>>({})
	const [registrationData, setRegistrationData] = useState<Partial<RegistrationFormData>>({})
	const [passwordRecoveryData, setPasswordRecoveryData] = useState<Partial<PasswordRecoveryFormData>>({})
	const [passwordResetData, setPasswordResetData] = useState<Partial<PasswordResetFormData>>({})
	const [createAccountData, setCreateAccountData] = useState<Partial<CreateAccountFormData>>({})

	// Validation hooks
	const loginValidation = useFormValidation(loginSchema)
	const registrationValidation = useFormValidation(registrationSchema)
	const passwordRecoveryValidation = useFormValidation(passwordRecoverySchema)
	const passwordResetValidation = useFormValidation(passwordResetSchema)
	const createAccountValidation = useFormValidation(createAccountSchema)

	// Form handlers
	const handleLoginSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (loginValidation.validate(loginData)) {
			loginValidation.setIsSubmitting(true)
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1000))
			console.log("Login successful:", loginData)
			loginValidation.setIsSubmitting(false)
		}
	}

	const handleRegistrationSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (registrationValidation.validate(registrationData)) {
			registrationValidation.setIsSubmitting(true)
			await new Promise((resolve) => setTimeout(resolve, 1000))
			console.log("Registration successful:", registrationData)
			registrationValidation.setIsSubmitting(false)
		}
	}

	const handlePasswordRecoverySubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (passwordRecoveryValidation.validate(passwordRecoveryData)) {
			passwordRecoveryValidation.setIsSubmitting(true)
			await new Promise((resolve) => setTimeout(resolve, 1000))
			console.log("Password recovery email sent:", passwordRecoveryData)
			passwordRecoveryValidation.setIsSubmitting(false)
		}
	}

	const handlePasswordResetSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (passwordResetValidation.validate(passwordResetData)) {
			passwordResetValidation.setIsSubmitting(true)
			await new Promise((resolve) => setTimeout(resolve, 1000))
			console.log("Password reset successful:", passwordResetData)
			passwordResetValidation.setIsSubmitting(false)
		}
	}

	const handleCreateAccountSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (createAccountValidation.validate(createAccountData)) {
			createAccountValidation.setIsSubmitting(true)
			await new Promise((resolve) => setTimeout(resolve, 1000))
			console.log("Account created successfully:", createAccountData)
			createAccountValidation.setIsSubmitting(false)
		}
	}

	return (
		<div className="min-h-screen bg-gray-800 p-4">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{/* Screen 1: Lista de Casa Nova */}
					<Card className="bg-amber-50 p-0 overflow-hidden h-[600px] w-[300px] mx-auto">
						<div className="bg-amber-50 p-4 h-full flex flex-col">
							<div className="flex-1 flex flex-col items-center justify-center text-center">
								<div className="w-48 h-32 bg-orange-200 rounded-lg mb-6 flex items-center justify-center">
									<div className="text-6xl">🪑</div>
								</div>
								<h2 className="text-lg font-semibold mb-2">Lista de Casa Nova</h2>
								<p className="text-sm text-gray-600 mb-8 px-4">Crie sua lista de casa nova para começar sua jornada</p>

								<Button className="w-full bg-black text-white rounded-lg mb-4">Continuar</Button>

								<div className="space-y-2 w-full">
									<Button variant="outline" className="w-full flex items-center gap-2 bg-transparent">
										<span className="text-blue-600">G</span>
										Continuar com o Google
									</Button>
									<Button variant="outline" className="w-full flex items-center gap-2 bg-transparent">
										<span>🍎</span>
										Continuar com Apple
									</Button>
								</div>

								<p className="text-xs text-gray-500 mt-4 text-center">
									By clicking "Continue", you agree to our Terms of Service and Privacy Policy
								</p>
							</div>
						</div>
					</Card>

					{/* Screen 2: Login with Validation */}
					<Card className="bg-amber-50 p-0 overflow-hidden h-[600px] w-[300px] mx-auto">
						<div className="bg-amber-50 p-4 h-full flex flex-col">
							<div className="flex-1 flex flex-col items-center justify-center">
								<div className="w-48 h-32 bg-orange-200 rounded-lg mb-6 flex items-center justify-center">
									<div className="text-4xl">💡</div>
								</div>
								<h2 className="text-lg font-semibold mb-2">Faça login e comece a usar!</h2>
								<p className="text-sm text-gray-600 mb-8 text-center">Entre sua e-mail para continuar</p>

								<form onSubmit={handleLoginSubmit} className="w-full space-y-4">
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

									<Button
										type="submit"
										className="w-full bg-black text-white rounded-lg"
										disabled={loginValidation.isSubmitting}
									>
										{loginValidation.isSubmitting ? "Entrando..." : "Entrar"}
									</Button>
								</form>
							</div>
						</div>
					</Card>

					{/* Screen 3: Password Recovery with Validation */}
					<Card className="bg-amber-50 p-0 overflow-hidden h-[600px] w-[300px] mx-auto">
						<div className="bg-amber-50 p-4 h-full flex flex-col">
							<div className="flex-1 flex flex-col items-center justify-center">
								<div className="w-48 h-32 bg-orange-200 rounded-lg mb-6 flex items-center justify-center">
									<div className="text-4xl">👤</div>
								</div>
								<h2 className="text-lg font-semibold mb-2">Recuperação de senha</h2>
								<p className="text-sm text-gray-600 mb-8 text-center">Entre seu e-mail para continuar</p>

								<form onSubmit={handlePasswordRecoverySubmit} className="w-full space-y-4">
									<div>
										<Input
											placeholder="E-mail"
											type="email"
											className={`bg-white ${passwordRecoveryValidation.errors.email ? "border-red-500" : ""}`}
											value={passwordRecoveryData.email || ""}
											onChange={(e) => {
												setPasswordRecoveryData((prev) => ({ ...prev, email: e.target.value }))
												passwordRecoveryValidation.clearError("email")
											}}
										/>
										{passwordRecoveryValidation.errors.email && (
											<div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
												<AlertCircle className="w-3 h-3" />
												<span>{passwordRecoveryValidation.errors.email}</span>
											</div>
										)}
									</div>

									<Button
										type="submit"
										className="w-full bg-black text-white rounded-lg"
										disabled={passwordRecoveryValidation.isSubmitting}
									>
										{passwordRecoveryValidation.isSubmitting ? "Enviando..." : "Enviar"}
									</Button>
								</form>
							</div>
						</div>
					</Card>

					{/* Screen 4: Password Reset with Validation */}
					<Card className="bg-amber-50 p-0 overflow-hidden h-[600px] w-[300px] mx-auto">
						<div className="bg-amber-50 p-4 h-full flex flex-col">
							<div className="flex-1 flex flex-col items-center justify-center">
								<div className="w-48 h-32 bg-orange-200 rounded-lg mb-6 flex items-center justify-center">
									<div className="text-4xl">🪴</div>
								</div>
								<h2 className="text-lg font-semibold mb-2">Redefinição de senha</h2>
								<p className="text-sm text-gray-600 mb-8 text-center">Defina sua nova senha</p>

								<form onSubmit={handlePasswordResetSubmit} className="w-full space-y-4">
									<div>
										<Input
											placeholder="Nova senha"
											type="password"
											className={`bg-white ${passwordResetValidation.errors.newPassword ? "border-red-500" : ""}`}
											value={passwordResetData.newPassword || ""}
											onChange={(e) => {
												setPasswordResetData((prev) => ({ ...prev, newPassword: e.target.value }))
												passwordResetValidation.clearError("newPassword")
											}}
										/>
										{passwordResetValidation.errors.newPassword && (
											<div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
												<AlertCircle className="w-3 h-3" />
												<span>{passwordResetValidation.errors.newPassword}</span>
											</div>
										)}
									</div>

									<div>
										<Input
											placeholder="Confirme a nova senha"
											type="password"
											className={`bg-white ${passwordResetValidation.errors.confirmNewPassword ? "border-red-500" : ""}`}
											value={passwordResetData.confirmNewPassword || ""}
											onChange={(e) => {
												setPasswordResetData((prev) => ({ ...prev, confirmNewPassword: e.target.value }))
												passwordResetValidation.clearError("confirmNewPassword")
											}}
										/>
										{passwordResetValidation.errors.confirmNewPassword && (
											<div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
												<AlertCircle className="w-3 h-3" />
												<span>{passwordResetValidation.errors.confirmNewPassword}</span>
											</div>
										)}
									</div>

									<Button
										type="submit"
										className="w-full bg-black text-white rounded-lg"
										disabled={passwordResetValidation.isSubmitting}
									>
										{passwordResetValidation.isSubmitting ? "Atualizando..." : "Atualizar senha"}
									</Button>
								</form>
							</div>
						</div>
					</Card>

					{/* Screen 5: Create Account with Validation */}
					<Card className="bg-amber-50 p-0 overflow-hidden h-[600px] w-[300px] mx-auto">
						<div className="bg-amber-50 p-4 h-full flex flex-col">
							<div className="flex-1 flex flex-col justify-center">
								<h2 className="text-xl font-semibold mb-8 text-center">Criar conta</h2>

								<form onSubmit={handleCreateAccountSubmit} className="space-y-4">
									<div>
										<Input
											placeholder="Nome"
											className={`bg-white ${createAccountValidation.errors.name ? "border-red-500" : ""}`}
											value={createAccountData.name || ""}
											onChange={(e) => {
												setCreateAccountData((prev) => ({ ...prev, name: e.target.value }))
												createAccountValidation.clearError("name")
											}}
										/>
										{createAccountValidation.errors.name && (
											<div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
												<AlertCircle className="w-3 h-3" />
												<span>{createAccountValidation.errors.name}</span>
											</div>
										)}
									</div>

									<div>
										<Input
											placeholder="E-mail"
											type="email"
											className={`bg-white ${createAccountValidation.errors.email ? "border-red-500" : ""}`}
											value={createAccountData.email || ""}
											onChange={(e) => {
												setCreateAccountData((prev) => ({ ...prev, email: e.target.value }))
												createAccountValidation.clearError("email")
											}}
										/>
										{createAccountValidation.errors.email && (
											<div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
												<AlertCircle className="w-3 h-3" />
												<span>{createAccountValidation.errors.email}</span>
											</div>
										)}
									</div>

									<div>
										<Input
											placeholder="Senha"
											type="password"
											className={`bg-white ${createAccountValidation.errors.password ? "border-red-500" : ""}`}
											value={createAccountData.password || ""}
											onChange={(e) => {
												setCreateAccountData((prev) => ({ ...prev, password: e.target.value }))
												createAccountValidation.clearError("password")
											}}
										/>
										{createAccountValidation.errors.password && (
											<div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
												<AlertCircle className="w-3 h-3" />
												<span>{createAccountValidation.errors.password}</span>
											</div>
										)}
									</div>

									<div>
										<Input
											placeholder="Confirmar senha"
											type="password"
											className={`bg-white ${createAccountValidation.errors.confirmPassword ? "border-red-500" : ""}`}
											value={createAccountData.confirmPassword || ""}
											onChange={(e) => {
												setCreateAccountData((prev) => ({ ...prev, confirmPassword: e.target.value }))
												createAccountValidation.clearError("confirmPassword")
											}}
										/>
										{createAccountValidation.errors.confirmPassword && (
											<div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
												<AlertCircle className="w-3 h-3" />
												<span>{createAccountValidation.errors.confirmPassword}</span>
											</div>
										)}
									</div>

									<p className="text-xs text-gray-600 text-center">Já tenho conta</p>

									<Button
										type="submit"
										className="w-full bg-black text-white rounded-lg"
										disabled={createAccountValidation.isSubmitting}
									>
										{createAccountValidation.isSubmitting ? "Criando..." : "Continuar"}
									</Button>
								</form>
							</div>
						</div>
					</Card>

					{/* Screen 6: Item List */}
					<Card className="bg-gray-100 p-0 overflow-hidden h-[600px] w-[300px] mx-auto">
						<div className="bg-gray-100 p-4 h-full flex flex-col">
							<div className="flex items-center justify-between mb-4">
								<h2 className="text-lg font-semibold">Lista de itens</h2>
								<Search className="w-5 h-5" />
							</div>

							<div className="flex gap-2 mb-4 text-sm">
								<span className="bg-white px-3 py-1 rounded">Eletrodomésticos</span>
								<span className="px-3 py-1">Portáteis</span>
								<span className="px-3 py-1">Decoração</span>
							</div>

							<div className="space-y-3 flex-1">
								{[1, 2, 3, 4, 5].map((item) => (
									<div key={item} className="bg-white p-3 rounded-lg flex items-center justify-between">
										<div className="flex items-center gap-3">
											<div className="w-12 h-12 bg-gray-200 rounded"></div>
											<div>
												<p className="font-medium">Nome do produto</p>
												<p className="text-sm text-gray-600">Descrição</p>
											</div>
										</div>
										<div className="text-right">
											<p className="font-semibold">R$ 200</p>
											<Edit3 className="w-4 h-4 ml-auto mt-1" />
										</div>
									</div>
								))}
							</div>

							<div className="mt-4 text-center">
								<p className="font-semibold">Total: R$ 1.800</p>
								<div className="flex justify-center gap-2 mt-2">
									<Share2 className="w-5 h-5" />
									<div className="w-5 h-5 bg-black rounded-full"></div>
									<div className="w-5 h-5 bg-gray-400 rounded-full"></div>
									<Edit3 className="w-5 h-5" />
								</div>
							</div>
						</div>
					</Card>

					{/* Screen 7: Profile */}
					<Card className="bg-amber-50 p-0 overflow-hidden h-[600px] w-[300px] mx-auto">
						<div className="bg-amber-50 p-4 h-full flex flex-col">
							<div className="flex items-center justify-between mb-6">
								<div className="w-6 h-6"></div>
								<div className="w-16 h-16 bg-orange-200 rounded-lg flex items-center justify-center">
									<div className="text-2xl">🪴</div>
								</div>
								<div className="w-6 h-6"></div>
							</div>

							<div className="text-center mb-6">
								<Avatar className="w-16 h-16 mx-auto mb-2">
									<AvatarImage src="/placeholder-user.jpg" />
									<AvatarFallback>MA</AvatarFallback>
								</Avatar>
								<h3 className="font-semibold">Maria Alice</h3>
								<p className="text-sm text-gray-600">Lente geral</p>
							</div>

							<div className="bg-white rounded-lg p-4 mb-4">
								<h4 className="font-semibold mb-2">Suas informações</h4>
								<div className="space-y-2 text-sm">
									<div className="flex justify-between">
										<span>Nome*</span>
										<span>Maria Alice</span>
									</div>
									<div className="flex justify-between">
										<span>E-mail*</span>
										<span>mariaalice@email.com</span>
									</div>
									<div className="flex justify-between">
										<span>Alterar senha*</span>
										<span>*******</span>
									</div>
								</div>
								<Badge className="mt-2 bg-black text-white">Deslogar conta</Badge>
							</div>

							<div className="grid grid-cols-4 gap-2">
								{["Maria", "João", "Patricia", "Marcos", "Henrique", "Gustavo", "Benjamin", "Jessica"].map(
									(name, i) => (
										<div key={i} className="text-center">
											<Avatar className="w-10 h-10 mx-auto mb-1">
												<AvatarFallback>{name[0]}</AvatarFallback>
											</Avatar>
											<p className="text-xs">{name}</p>
										</div>
									),
								)}
							</div>

							<div className="flex justify-center gap-2 mt-4">
								<div className="w-2 h-2 bg-orange-400 rounded-full"></div>
								<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
								<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
							</div>
						</div>
					</Card>

					{/* Screen 8: Search/Contacts */}
					<Card className="bg-amber-50 p-0 overflow-hidden h-[600px] w-[300px] mx-auto">
						<div className="bg-amber-50 p-4 h-full flex flex-col">
							<div className="flex items-center justify-between mb-4">
								<div className="w-16 h-16 bg-orange-200 rounded-lg flex items-center justify-center">
									<div className="text-2xl">🛋️</div>
								</div>
								<div className="flex gap-2">
									<Search className="w-6 h-6" />
									<MoreHorizontal className="w-6 h-6" />
								</div>
							</div>

							<div className="relative mb-4">
								<Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
								<Input placeholder="Pesquisar" className="pl-10 bg-white" />
							</div>

							<div className="grid grid-cols-4 gap-4">
								{["Maria", "João", "Patricia", "Marcos", "Henrique", "Gustavo", "Benjamin", "Jessica"].map(
									(name, i) => (
										<div key={i} className="text-center">
											<Avatar className="w-12 h-12 mx-auto mb-1">
												<AvatarFallback>{name[0]}</AvatarFallback>
											</Avatar>
											<p className="text-xs">{name}</p>
										</div>
									),
								)}
							</div>

							<div className="mt-auto">
								<div className="bg-black text-white p-3 rounded-lg text-center">
									<p className="text-sm">Vinicius</p>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</div>
	)
}
