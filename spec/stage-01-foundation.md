# Stage 01 — Fundação (Hugo + Hextra + i18n + CI)

**Objetivo:** ter um site bilíngue mínimo no ar, com o tema Hextra e deploy automático,
servindo de base para todos os stages seguintes.

## Escopo

- [x] Inicializar projeto Hugo.
- [x] Instalar tema **Hextra** (como Hugo Module — recomendado — ou git submodule).
- [x] Configurar site multilíngue: `pt-br` (default) e `en`.
- [x] Página inicial "Hello World" em ambos os idiomas.
- [x] Conectar repositório à **Vercel** (deploy automático na `main`).
- [x] **Ambiente de produção com Docker** (build Hugo + Nginx) para paridade local.
- [x] Versionar e dar o primeiro push para o GitHub.

## Fora de escopo

Conteúdo real (hero, projetos, skills) — vem nos stages seguintes.

## Pré-requisitos

- Go instalado (para Hugo Modules).
- Hugo **extended** ≥ 0.120.
- Docker instalado (para o ambiente de produção local).
- Conta na **Vercel** conectada ao GitHub.
- Repositório: https://github.com/MathBriton/Portfolio-Web

## Tarefas

### 1.1 Inicialização

```bash
hugo new site . --force
hugo mod init github.com/<user>/portfolio-web
```

### 1.2 Tema Hextra via Hugo Modules

`hugo.toml` (mínimo):

```toml
[module]
  [[module.imports]]
    path = "github.com/imfing/hextra"
```

```bash
hugo mod get -u
```

### 1.3 Configuração multilíngue

`config/_default/languages.toml`:

```toml
[pt-br]
  languageName = "Português"
  languageCode = "pt-BR"
  weight = 1
  title = "Matheus Brito — Desenvolvedor de Software"

[en]
  languageName = "English"
  languageCode = "en-US"
  weight = 2
  title = "Matheus Brito — Software Developer"
```

### 1.4 Conteúdo placeholder

- `content/_index.pt-br.md` → "Olá, sou o Matheus."
- `content/_index.en.md` → "Hi, I'm Matheus."

### 1.5 Deploy na Vercel

A Vercel builda o Hugo nativamente. Configuração já versionada em
[`vercel.json`](../vercel.json):
1. Conectar o repo `MathBriton/Portfolio-Web` na Vercel.
2. Framework preset: **Hugo**; `HUGO_VERSION` fixada (igual à do Docker).
3. Cada push na `main` → deploy de produção; PRs → preview deploy.

> Hugo Modules exigem Go no build. Se a build da Vercel não encontrar Go, o plano B
> é usar o tema Hextra como **git submodule** (não precisa de Go).

### 1.6 Ambiente de produção com Docker

Arquivos já criados na raiz:
- [`Dockerfile`](../Dockerfile) — multi-stage: builda com `hugomods/hugo` e serve via Nginx.
- [`nginx.conf`](../nginx.conf) — gzip, cache de assets, headers de segurança.
- [`docker-compose.yml`](../docker-compose.yml) — serviço `web` (prod) e `dev` (live reload).

```bash
docker compose up --build web         # produção em http://localhost:8080
docker compose --profile dev up dev   # dev com live reload em http://localhost:1313
```

### 1.7 Versionamento

```bash
git init
git remote add origin https://github.com/MathBriton/Portfolio-Web.git
git add -A
git commit -m "chore: configura projeto Hugo com tema Hextra e i18n pt-br/en"
git push -u origin main
```

## Critérios de aceite

- [ ] `hugo server` (ou `docker compose --profile dev up dev`) exibe as duas versões de idioma.
- [ ] Seletor de idioma do Hextra alterna entre PT-BR e EN.
- [ ] `docker compose up --build web` sobe o site estático em http://localhost:8080.
- [ ] Push na `main` dispara o deploy na Vercel e o site fica acessível por URL pública.
- [ ] Dark/light mode do Hextra funciona.

## Riscos

- Hugo **não-extended** quebra o pipeline de assets do Hextra → usar imagem `exts` no Docker e `HUGO_VERSION` extended na Vercel.
- Hugo Modules exige Go no build → garantido no Docker; na Vercel, cair para git submodule se necessário.
