
# Vibe Coding Mobile

> Aplicação web para gestão colaborativa de listas, desenvolvida com Next.js, Supabase, shadcn/ui, React Query e Zod.

## Tecnologias

- Next.js 15
- Supabase
- shadcn/ui
- React Query (Tanstack)
- Zod
- ESLint & Prettier

## Como rodar o projeto

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Configure o arquivo `.env` conforme o `.env.example`.
3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse [http://localhost:3000](http://localhost:3000)

## Estrutura inicial

O projeto está organizado em etapas, conforme o arquivo `ENTREGAS.md`.

## Funcionalidades

- Autenticação e cadastro de usuários
- Gestão de listas e itens
- Compartilhamento e colaboração
- Validação de dados com Zod
- UI moderna com shadcn/ui

## Checklist de entregas

Consulte o arquivo `ENTREGAS.md` para acompanhar o progresso e requisitos de cada etapa.

## Scripts úteis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npx eslint src/` — verifica problemas de lint
- `npx prettier --check src/` — verifica formatação

## Deploy

O deploy pode ser realizado facilmente na Vercel ou em qualquer plataforma que suporte Next.js.
