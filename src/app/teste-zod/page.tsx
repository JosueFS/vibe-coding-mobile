"use client";
import { useState } from "react";
import { userSchema, UserSchema } from "@/lib/schemas/userSchema";
import { Button } from "@/components/ui/button";

export default function TesteZodPage() {
	const [result, setResult] = useState<string | null>(null);

	function validarUsuario(dados: UserSchema) {
		const validacao = userSchema.safeParse(dados);
		if (validacao.success) {
			setResult("Validação bem-sucedida! Usuário válido.");
		} else {
			setResult("Erro: " + JSON.stringify(validacao.error.issues));
		}
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<h1 className="mb-4 text-2xl font-bold">Teste do Zod</h1>
			<div className="flex gap-4">
				<Button
					onClick={() =>
						validarUsuario({
							name: "Josué",
							email: "josue@email.com",
							password: "123456",
						})
					}
				>
					Validar usuário (caminho feliz)
				</Button>
				<Button
					variant="outline"
					onClick={() =>
						validarUsuario({
							name: "J",
							email: "email-invalido",
							password: "123",
						})
					}
				>
					Validar usuário (erro)
				</Button>
			</div>
			{result && <span className="mt-8 text-lg">{result}</span>}
		</main>
	);
}
