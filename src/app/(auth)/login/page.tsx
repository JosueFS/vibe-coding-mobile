"use client"
import { Card } from "@/components/ui/card"
import { LoginForm } from "./_components/login-form"

export default function LoginPage() {
	return (
		<div className="min-h-screen bg-gray-800 p-4 flex items-center justify-center">
			<Card className="bg-amber-50 p-0 overflow-hidden h-[600px] w-[300px] mx-auto">
				<div className="bg-amber-50 p-4 h-full flex flex-col">
					<div className="flex-1 flex flex-col items-center justify-center">
						<div className="w-48 h-32 bg-orange-200 rounded-lg mb-6 flex items-center justify-center">
							<div className="text-4xl">💡</div>
						</div>
						<h2 className="text-lg font-semibold mb-2">Faça login e comece a usar!</h2>
						<p className="text-sm text-gray-600 mb-8 text-center">Entre sua e-mail para continuar</p>
						<LoginForm />
					</div>
				</div>
			</Card>
		</div>
	)
}
