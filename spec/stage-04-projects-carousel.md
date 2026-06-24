# Stage 04 — Carrossel de projetos

**Objetivo:** carrossel exibindo os **4 projetos** de destaque, alimentado por
`data/projects.yaml`, acessível e responsivo.

## Projetos (fonte: `data/projects.yaml`)

1. **Sistema ERP** — .NET / Node.js
2. **Sistema de Chamados** (estilo Slack) — .NET / Node.js
3. **CRM** — .NET / Node.js
4. **Plataforma de Streaming** (YouTube/Twitch/Kick/Netflix) — **Phoenix + LiveView (Elixir)**

## Card de projeto

Cada slide é um card com:
- Imagem/thumbnail (`image`)
- Título (traduzido)
- Resumo curto (traduzido)
- Badges da stack (`stack[]`)
- Botões opcionais: **Repo** e **Demo** (renderizar só se a URL existir)

## Comportamento do carrossel

- Navegação: setas ‹ › + dots/indicadores.
- **Teclado:** ←/→ navegam; foco visível (acessibilidade).
- **Touch/swipe** no mobile.
- Autoplay **opcional** e pausável (respeitar `prefers-reduced-motion` → sem autoplay).
- Responsivo: 1 card (mobile) / 2 (tablet) / 3 (desktop) visíveis — ou 1 por vez com peek lateral (definir no design).
- Loop infinito opcional.

## Decisão técnica

- Preferir solução **leve e sem dependência pesada**. Opções:
  1. CSS scroll-snap + JS mínimo (recomendado — zero libs).
  2. Biblioteca leve (ex.: Glide.js / Embla) via `assets/js` se precisar de mais recursos.
- Renderizar slides com `range` sobre `site.Data.projects` ordenado por `order`.

## Tarefas

- [ ] `layouts/partials/carousel.html` iterando `data/projects.yaml`.
- [ ] `layouts/partials/project-card.html`.
- [ ] JS do carrossel em `assets/js/carousel.js` (importado via Hugo Pipes).
- [ ] Pipeline de imagens dos projetos (webp, lazy-load exceto o primeiro).
- [ ] Estados sem `repo`/`demo` (esconder botão).

## Critérios de aceite

- [ ] Os 4 projetos aparecem na ordem definida pelo `order`.
- [ ] Adicionar um 5º projeto no YAML aparece sem tocar no template.
- [ ] Navegável por mouse, toque e teclado.
- [ ] `prefers-reduced-motion` desativa autoplay/transições bruscas.
- [ ] Sem CLS ao carregar imagens (dimensões reservadas).
- [ ] Badges de stack do projeto de streaming mostram Elixir/Phoenix/LiveView.

## Dependências

Stages 01, 02 e (para estética) compartilha tokens visuais com o Stage 07.
