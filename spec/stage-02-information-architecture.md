# Stage 02 — Arquitetura de informação & modelo de dados

**Objetivo:** definir a estrutura de página única (landing) e modelar projetos,
skills e redes sociais como **data files**, para que o conteúdo seja editável sem
mexer em templates.

## Decisão de arquitetura

Site **one-page** (landing) com âncoras de navegação. Seções, na ordem:

1. **Hero** (avatar + pitch) — Stage 03
2. **Sobre / Jornada** — Stage 05
3. **Skills** — Stage 05
4. **Projetos** (carrossel) — Stage 04
5. **Contato / Social** — Stage 06

A nav do Hextra aponta para âncoras (`#projetos`, `#contato`, ...).

## Modelo de dados

### `data/projects.yaml`

```yaml
- id: erp
  order: 1
  featured: true
  title:
    pt-br: "Sistema ERP"
    en: "ERP System"
  summary:
    pt-br: "Gestão empresarial integrada: financeiro, estoque e vendas."
    en: "Integrated business management: finance, inventory and sales."
  stack: [".NET", "Node.js", "PostgreSQL"]
  image: "/img/projects/erp.webp"
  links:
    repo: ""        # opcional
    demo: ""        # opcional
  tags: [backend, fullstack]

- id: tickets
  order: 2
  featured: true
  title:
    pt-br: "Sistema de Chamados"
    en: "Ticketing System"
  summary:
    pt-br: "Comunicação e chamados em tempo real, inspirado no Slack."
    en: "Real-time communication and ticketing, Slack-inspired."
  stack: [".NET", "Node.js", "WebSockets"]
  image: "/img/projects/tickets.webp"
  links: { repo: "", demo: "" }
  tags: [realtime, fullstack]

- id: crm
  order: 3
  featured: true
  title:
    pt-br: "CRM"
    en: "CRM"
  summary:
    pt-br: "Gestão de relacionamento com clientes e funil de vendas."
    en: "Customer relationship management and sales funnel."
  stack: [".NET", "Node.js", "PostgreSQL"]
  image: "/img/projects/crm.webp"
  links: { repo: "", demo: "" }
  tags: [fullstack]

- id: streaming
  order: 4
  featured: true
  title:
    pt-br: "Plataforma de Streaming"
    en: "Streaming Platform"
  summary:
    pt-br: "Streaming ao vivo e VOD inspirado em YouTube, Twitch, Kick e Netflix."
    en: "Live streaming and VOD inspired by YouTube, Twitch, Kick and Netflix."
  stack: ["Elixir", "Phoenix", "LiveView", "BEAM"]
  image: "/img/projects/streaming.webp"
  links: { repo: "", demo: "" }
  tags: [realtime, elixir, high-availability]
```

### `data/skills.yaml`

```yaml
core:
  - { name: ".NET",    level: "Proficiente / Proficient", years: 3 }
  - { name: "Node.js", level: "Proficiente / Proficient", years: 3 }
learning:
  - name: "Elixir"
    focus:
      pt-br: "Alta disponibilidade e tolerância a falhas com a VM da BEAM."
      en: "High availability and fault tolerance on the BEAM VM."
  - name: "Go"
    focus:
      pt-br: "Concorrência e paralelismo com goroutines."
      en: "Concurrency and parallelism with goroutines."
foundations:
  - "SQL / PostgreSQL"
  - "REST / WebSockets"
  - "Git / CI-CD"
  - "Docker"
```

### `data/socials.yaml`

```yaml
- { id: github,    label: "GitHub",    url: "https://github.com/<user>",        icon: "github" }
- { id: linkedin,  label: "LinkedIn",  url: "https://linkedin.com/in/<user>",   icon: "linkedin" }
- { id: instagram, label: "Instagram", url: "https://instagram.com/<user>",     icon: "instagram" }
- { id: email,     label: "E-mail",    url: "mailto:mathhbrito@gmail.com",      icon: "envelope" }
```

## Tarefas

- [ ] Criar os três data files com placeholders reais.
- [ ] Definir `i18n/pt-br.toml` e `i18n/en.toml` para rótulos de UI (botões, seções).
- [ ] Configurar menu de âncoras no `config/_default/menus.*.toml`.

## Critérios de aceite

- [ ] Os data files validam (sem erro de parsing no build).
- [ ] É possível adicionar/remover um projeto **editando só o YAML**.
- [ ] Strings de UI vêm do `i18n/`, nunca hardcoded no template.

## Dependências

Stage 01 concluído.
