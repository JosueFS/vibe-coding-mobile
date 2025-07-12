"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";

export default function TesteButtonPage() {
	const [dbStatus, setDbStatus] = useState<string | null>(null);

	async function checkSupabase() {
		// Consulta simples: busca um registro da tabela 'lists'
		try {
			const { data, error } = await supabase.from('categories').select('*').limit(1);
			if (error) {
				setDbStatus("Erro: " + error.message);
			} else {
				setDbStatus("Conexão bem-sucedida! Resultado: " + JSON.stringify(data));
			}
		} catch (err: any) {
			setDbStatus("Erro: " + err.message);
		}
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<h1 className="mb-4 text-2xl font-bold">Teste do Button (shadcn/ui)</h1>
			<Button onClick={() => alert('Funcionando!')}>Clique aqui</Button>
			<div className="mt-8 flex flex-col items-center">
				<Button variant="outline" onClick={checkSupabase}>
					Testar conexão com Supabase
				</Button>
				{dbStatus && (
					<span className="mt-4 text-lg">{dbStatus}</span>
				)}
			</div>
		</main>
	);
}
