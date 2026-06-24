# Stage 05 — Skills & Jornada de aprendizado

**Objetivo:** comunicar competências atuais e a jornada de aprendizado em
Elixir/Go, reforçando os temas de concorrência, paralelismo e alta disponibilidade.

## Seção "Sobre / Jornada"

Narrativa curta (bilíngue):

> **PT-BR:** Desenvolvedor de software fullstack, 27 anos, com 3 anos de experiência
> construindo aplicações com **.NET** e **Node.js**. Atualmente aprofundando em
> **Elixir** — explorando alta disponibilidade e tolerância a falhas na **VM da BEAM** —
> e em **Go**, focando concorrência e paralelismo com **goroutines**.

> **EN:** Fullstack software developer, 27, with 3 years building applications with
> **.NET** and **Node.js**. Currently diving into **Elixir** — exploring high
> availability and fault tolerance on the **BEAM VM** — and **Go**, focusing on
> concurrency and parallelism with **goroutines**.

## Seção "Skills" (fonte: `data/skills.yaml`)

Agrupar em três blocos:

| Grupo | Itens | Ênfase visual |
|-------|-------|---------------|
| **Core** | .NET, Node.js | "Proficiente" + anos |
| **Aprendendo / Learning** | Elixir (BEAM, alta disponibilidade), Go (goroutines) | Badge "Em aprendizado / Learning" |
| **Fundamentos / Foundations** | SQL/PostgreSQL, REST/WebSockets, Git/CI-CD, Docker | Lista de tags |

### Destaque conceitual (opcional, agrega valor)

Mini-cards explicando o "porquê" do aprendizado:
- **Concorrência** — goroutines (Go).
- **Paralelismo** — multi-core, BEAM/Go.
- **Alta disponibilidade & tolerância a falhas** — supervisão/OTP na BEAM (Elixir).

## Tarefas

- [ ] `layouts/partials/about.html` (narrativa, vinda de `i18n/` ou content).
- [ ] `layouts/partials/skills.html` iterando `data/skills.yaml`.
- [ ] Ícones por skill (set consistente — ex.: Simple Icons / Devicon via SVG inline).
- [ ] Badge "Em aprendizado / Learning" estilizado.

## Critérios de aceite

- [ ] Skills renderizam a partir do YAML, agrupadas corretamente.
- [ ] Elixir e Go aparecem claramente como "em aprendizado", não como core.
- [ ] Conceitos (concorrência/paralelismo/HA) comunicados sem jargão excessivo.
- [ ] Bilíngue completo.

## Dependências

Stages 01 e 02.
