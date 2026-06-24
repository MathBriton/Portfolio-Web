# Stage 08 — SEO, Acessibilidade, Performance & Deploy final

**Objetivo:** preparar o site para produção: descoberta (SEO), acessibilidade,
performance e go-live com domínio e checklist final.

## SEO

- [ ] `<title>` e `meta description` únicos por idioma.
- [ ] Open Graph + Twitter Card (imagem, título, descrição) por idioma.
- [ ] `hreflang` PT-BR ↔ EN (Hugo nativo).
- [ ] `sitemap.xml` (Hugo gera) + `robots.txt`.
- [ ] JSON-LD `Person` (nome, cargo, sameAs → links sociais).
- [ ] URLs limpas e canônicas.

## Acessibilidade (WCAG AA)

- [ ] Navegação por teclado completa (hero, carrossel, contato).
- [ ] Foco visível em todos os interativos.
- [ ] `alt` em todas as imagens; `aria-label` em ícones.
- [ ] Contraste AA em dark e light.
- [ ] `prefers-reduced-motion` respeitado no carrossel.
- [ ] Hierarquia de headings correta (um `h1`).

## Performance

- [ ] Imagens em WebP, dimensionadas, lazy-load (exceto above-the-fold).
- [ ] CSS/JS minificados (`hugo --minify`) e com fingerprint.
- [ ] Fontes com `swap` e preconnect/preload do essencial.
- [ ] Lighthouse mobile ≥ 90 em Performance, A11y, Best Practices, SEO.

## Deploy (Vercel)

- [ ] Projeto conectado na **Vercel** (preset Hugo, `vercel.json` versionado).
- [ ] Build de produção: `hugo --gc --minify`.
- [ ] Deploy automático na `main`; preview deploys em PRs.
- [ ] `HUGO_VERSION` na Vercel igual à do Docker (evita divergência de build).
- [ ] Domínio + HTTPS (custom domain opcional na Vercel).
- [ ] `baseURL` de produção correta no config.
- [ ] Paridade validada localmente via `docker compose up --build web`.

## Segurança (antes de cada push) ⚠️

- [ ] Nenhuma key, token ou segredo commitado (varredura — ver [git-workflow.md](git-workflow.md) e seção abaixo).
- [ ] Variáveis sensíveis (tokens de analytics, API keys) **só** no painel da Vercel / `.env` local (ignorado).
- [ ] `.gitignore` cobre `.env*`, `.vercel/`, build artifacts.
- [ ] `vercel.json` contém apenas config pública (sem segredos).

## Checklist de go-live (substituir placeholders)

- [ ] Handles reais em `data/socials.yaml` (GitHub, LinkedIn, Instagram).
- [ ] Foto pessoal final em `static/img/avatar/`.
- [ ] Imagens reais dos 4 projetos em `static/img/projects/`.
- [ ] Links de repo/demo dos projetos preenchidos (ou ocultos).
- [ ] Revisão ortográfica PT-BR e EN.
- [ ] Teste em navegadores (Chrome, Firefox, Safari) e mobile real.

## Critérios de aceite

- [ ] Site público, com HTTPS, indexável.
- [ ] Lighthouse ≥ 90 nas quatro categorias (mobile).
- [ ] Compartilhar a URL gera preview rico (OG) nas duas línguas.
- [ ] Nenhum placeholder `<user>`/lorem em produção.

## Dependências

Todos os stages anteriores.

## Melhorias futuras (backlog, fora do MVP)

- Formulário de contato via serviço externo.
- Páginas de detalhe por projeto (case study).
- Blog/notas técnicas (Hextra suporta nativamente).
- Analytics com foco em privacidade (ex.: Plausible).
- Modo "currículo em PDF" para download.
