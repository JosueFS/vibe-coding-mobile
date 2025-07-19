"use client"
import { Card } from "@/components/ui/card"
import { RegisterForm } from "@/components/auth/RegisterForm"

export default function RegisterPage() {
	return (
		<div className="min-h-screen bg-gray-800 p-4 flex items-center justify-center">
			<Card className="bg-amber-50 p-0 overflow-hidden h-[600px] w-[300px] mx-auto">
				<div className="bg-amber-50 p-4 h-full flex flex-col justify-center">
					<h2 className="text-xl font-semibold mb-8 text-center">Criar conta</h2>
					<RegisterForm />
				</div>
			</Card>
		</div>
	)
}
