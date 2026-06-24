# Portfólio — Matheus Brito · Spec-Driven Development

> Documento mestre. Cada **stage** abaixo é independente, tem critérios de aceite
> próprios e pode ser desenvolvido/entregue em sequência. Conteúdo **bilíngue (PT-BR + EN)**.

## 1. Visão geral

Portfólio pessoal de um desenvolvedor de software fullstack. Single-purpose:
apresentar a pessoa, suas competências, sua jornada de aprendizado e 4 projetos
de destaque em um carrossel, com canais de contato.

| Campo | Valor |
|-------|-------|
| Nome | Matheus Brito de Barros Lomba |
| Idade | 27 anos |
| Cargo | Desenvolvedor de Software |
| Experiência | 3 anos Fullstack |
| Stack atual | .NET, Node.js |
| Em aprendizado | Elixir (BEAM VM, alta disponibilidade) e Go (goroutines, concorrência/paralelismo) |
| Idiomas do site | PT-BR (padrão) + EN |

## 2. Persona / público-alvo

- **Recrutadores técnicos e tech leads** — querem ver stack, experiência e projetos rápido.
- **Recrutadores internacionais / remoto** — daí a versão EN.
- **Pares da comunidade** (GitHub/LinkedIn) — interessados nos projetos e na jornada Elixir/Go.

## 3. Stack técnico

| Camada | Escolha | Motivo |
|--------|---------|--------|
| Site generator | **Hugo** (Go) | Build rápido, Markdown-first |
| Tema | **Hextra** | Dark mode, busca, i18n, navegação prontos |
| Conteúdo | Markdown + data files (YAML/TOML) | Projetos e skills como dados, não hardcode |
| i18n | Hugo multilíngue nativo | `pt-br` (default) + `en` |
| Estilo | CSS custom sobre Hextra (`assets/css/custom.css`) | Identidade visual própria |
| Deploy | **Vercel** (deploy automático na `main`) | CDN global, SSL, preview deploys |
| Prod local | **Docker** (build Hugo + Nginx) | Paridade de produção e plano B de host |
| Repositório | https://github.com/MathBriton/Portfolio-Web | — |
| Workflow | Commit + push **ao fim de cada stage** | Ver [git-workflow.md](git-workflow.md) |

> **Nota técnica:** o brief original citava "Astro com Hextra e Hugo". Hextra é um
> tema **do Hugo**, não do Astro. A spec adota **Hugo + Hextra** (decisão registrada).

## 4. Os 4 projetos do carrossel

| # | Projeto | Descrição | Stack alvo |
|---|---------|-----------|-----------|
| 1 | **Sistema ERP** | Gestão empresarial integrada | .NET / Node.js |
| 2 | **Sistema de Chamados** | Comunicação e tickets, estilo Slack | .NET / Node.js |
| 3 | **CRM** | Gestão de relacionamento com clientes | .NET / Node.js |
| 4 | **Plataforma de Streaming** | Inspirada em YouTube/Twitch/Kick/Netflix | **Phoenix + LiveView (Elixir)** |

## 5. Links sociais

`GitHub` · `LinkedIn` · `Instagram` · `E-mail`

## 6. Mapa de stages

| Stage | Objetivo | Entrega |
|-------|----------|---------|
| [01 — Fundação](stage-01-foundation.md) | Hugo + Hextra + i18n + CI no ar | Site "Hello World" bilíngue publicado |
| [02 — Arquitetura de informação](stage-02-information-architecture.md) | Modelo de dados e estrutura de páginas | Data files + seções definidas |
| [03 — Hero & Avatar](stage-03-hero-avatar.md) | Seção de abertura com foto e pitch | Hero responsivo |
| [04 — Carrossel de projetos](stage-04-projects-carousel.md) | Carrossel com os 4 projetos | Componente do carrossel funcional |
| [05 — Skills & Jornada](stage-05-skills-journey.md) | Competências e timeline de aprendizado | Seções de skills/jornada |
| [06 — Contato & Social](stage-06-contact-social.md) | Links sociais e contato | Footer/seção de contato |
| [07 — Tema & i18n polish](stage-07-theming-i18n.md) | Identidade visual e tradução completa | Tema custom + EN 100% |
| [08 — SEO, A11y & Deploy](stage-08-seo-deploy.md) | Performance, SEO, acessibilidade, go-live | Site final em produção |

## 7. Convenções globais

- **Definição de Pronto (DoD)** para qualquer stage:
  1. `hugo --gc --minify` builda sem erro nem warning de conteúdo faltante.
  2. Conteúdo existe em **PT-BR e EN**.
  3. Lighthouse (mobile) ≥ 90 em Performance, A11y, Best Practices, SEO (a partir do Stage 07).
  4. Responsivo validado em 360px, 768px, 1280px.
  5. Sem links quebrados (`hugo` + checagem manual).
  6. **Commit + push para a `main`** seguindo [git-workflow.md](git-workflow.md).
- **Branches:** `main` (produção, deploy automático na Vercel) ← `stage/NN-nome`.
- **Commits:** Conventional Commits, tipo em inglês + descrição em **pt-br**.
- **Estrutura de pastas** (alvo final):

```
Portfolio-Web/
├── hugo.toml                 # config principal
├── config/_default/          # config split (params, languages, menus)
├── content/
│   ├── _index.pt-br.md
│   └── _index.en.md
├── data/
│   ├── projects.yaml         # 4 projetos
│   ├── skills.yaml
│   └── socials.yaml
├── assets/css/custom.css
├── layouts/partials/         # hero, carousel, skills, contact
├── static/img/avatar/        # foto pessoal
├── i18n/                     # strings traduzidas
├── Dockerfile                # build Hugo + Nginx (produção)
├── docker-compose.yml        # prod local + dev com live reload
├── nginx.conf                # config do servidor estático
├── vercel.json               # deploy na Vercel
└── spec/                     # esta documentação
```
