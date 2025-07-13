"use client";
import { Button } from "@/components/ui/button";

// Exemplo de código formatado e lintado
export default function TesteEslintPrettierPage() {
	function handleClick() {
		// eslint irá avisar se não usar o parâmetro
		alert("ESLint e Prettier funcionando!");
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<h1 className="mb-4 text-2xl font-bold">Teste ESLint/Prettier</h1>
			<Button onClick={handleClick}>Testar ESLint/Prettier</Button>
		</main>
	);
}
