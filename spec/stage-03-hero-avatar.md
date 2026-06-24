# Stage 03 — Hero & Avatar

**Objetivo:** seção de abertura com **foto pessoal**, nome, cargo e pitch curto,
responsiva e bilíngue.

## Conteúdo

| Elemento | PT-BR | EN |
|----------|-------|-----|
| Nome | Matheus Brito de Barros Lomba | Matheus Brito de Barros Lomba |
| Cargo | Desenvolvedor de Software | Software Developer |
| Subtítulo | Fullstack · 3 anos de experiência | Fullstack · 3 years of experience |
| Pitch | "Construo aplicações fullstack com .NET e Node.js, explorando Elixir e Go para concorrência e alta disponibilidade." | "I build fullstack apps with .NET and Node.js, exploring Elixir and Go for concurrency and high availability." |
| CTA primário | Ver projetos | View projects |
| CTA secundário | Entrar em contato | Get in touch |

## Avatar

- Campo **específico** para a foto pessoal.
- Arquivo: `static/img/avatar/matheus.webp` (+ fallback `.jpg`).
- Especificação da imagem:
  - Quadrada, mínimo **512×512**, exibida em círculo.
  - Otimizada com Hugo Image Processing (`resize`, `webp`, `q85`).
  - `alt` traduzido ("Foto de Matheus Brito" / "Photo of Matheus Brito").
  - `loading="eager"` (above the fold) + dimensões fixas (evitar CLS).

## Tarefas

- [ ] `layouts/partials/hero.html` com avatar + textos vindos de params/i18n.
- [ ] Parametrizar nome/cargo/pitch em `config/_default/params.toml` (por idioma) ou `i18n/`.
- [ ] Pipeline de imagem do avatar (resize + webp).
- [ ] Âncoras dos CTAs (`#projetos`, `#contato`).
- [ ] Layout: avatar à esquerda / texto à direita no desktop; empilhado no mobile.

## Critérios de aceite

- [ ] Avatar aparece como círculo nítido em telas retina.
- [ ] Hero não causa layout shift (CLS ≈ 0).
- [ ] Textos trocam corretamente entre PT-BR e EN.
- [ ] CTAs rolam suavemente até as seções-alvo.
- [ ] Responsivo em 360 / 768 / 1280 px.

## Dependências

Stages 01 e 02.
