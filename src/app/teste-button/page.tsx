"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";

export default function TesteButtonPage() {
	const [dbStatus, setDbStatus] = useState<string | null>(null);


	function useCategoriesQuery() {
		return useQuery({
			queryKey: ["categories"],
			queryFn: async () => {
				const { data, error } = await supabase.from("categories").select("*").limit(1);
				if (error) throw new Error(error.message);
				return data;
			},
		});
	}

	const { data, error, isLoading, refetch } = useCategoriesQuery();

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<h1 className="mb-4 text-2xl font-bold">Teste do Button (shadcn/ui)</h1>
			<Button onClick={() => alert('Funcionando!')}>Clique aqui</Button>
			<div className="mt-8 flex flex-col items-center">
				<Button variant="outline" onClick={() => refetch()}>
					Testar conexão com Supabase (React Query)
				</Button>
				{isLoading && <span className="mt-4 text-lg">Carregando...</span>}
				{error && <span className="mt-4 text-lg text-red-600">Erro: {error.message}</span>}
				{data && (
					<span className="mt-4 text-lg">Conexão bem-sucedida! Resultado: {JSON.stringify(data)}</span>
				)}
			</div>
		</main>
	);
}
