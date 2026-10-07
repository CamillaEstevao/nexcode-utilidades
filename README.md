# NexCode Utilidades — Premium Master v3

Projeto completo em React + Vite, pronto para Vercel.

## O que foi ajustado
- Novo layout premium e responsivo
- Hero/carrossel com fotos reais dos produtos
- 6 produtos cadastrados com galerias reais
- Página de produto abre sempre no topo
- Botão Voltar na página do produto
- Modal de aviso antes de redirecionar para a Shopee
- Favoritos locais
- Busca e filtros por categoria
- PWA/atalho para celular
- Área administrativa responsiva
- Migração dos produtos seed para não perder produtos novos mesmo se existir localStorage antigo
- Configuração SPA para Vercel

## Rotas
- / — loja
- /ofertas — ofertas
- /produto/<slug> — produto
- /admin — painel administrativo

## Rodar
```bash
npm install
npm run dev
```

## Publicar
```bash
git add .
git commit -m "NexCode Premium Master v3"
git push
```
A Vercel conectada ao GitHub fará o deploy automaticamente.

## Observação sobre o Admin
O painel salva alterações em localStorage. Isso funciona imediatamente no navegador. Para sincronização real entre celular e desktop, conecte posteriormente ao Supabase.


## Mobile Premium V4

Ajustes adicionais:
- hero mobile mais baixo e proporcional
- título redimensionado para telas pequenas
- setas retiradas de cima do CTA
- linha de provas removida no mobile para evitar sobreposição
- imagem do produto centralizada e sem recortes agressivos
- cards de produto em uma coluna no celular
- header e busca refinados
- navegação inferior com safe area
- cache do PWA incrementado para v4

### Vercel
Use:
- Build Command: `node ./node_modules/vite/bin/vite.js build`
- Output Directory: `dist`
- Install Command: `npm install --include=optional`
