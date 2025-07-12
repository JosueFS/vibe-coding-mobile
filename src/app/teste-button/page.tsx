"use client";
import { Button } from "@/components/ui/button";

export default function TesteButtonPage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<h1 className="mb-4 text-2xl font-bold">Teste do Button (shadcn/ui)</h1>
			<Button onClick={() => alert('Funcionando!')}>Clique aqui</Button>
		</main>
	);
}
