# Stage 07 — Tema, identidade visual & i18n completo

**Objetivo:** dar identidade visual própria sobre o Hextra e garantir tradução
PT-BR/EN 100% completa e consistente.

## Identidade visual

- **Tokens de design** em `assets/css/custom.css` (CSS variables):
  - Paleta: definir cor primária, secundária, superfícies, texto — com variантes
    para **dark e light** (Hextra já tem toggle).
  - Tipografia: heading + body (usar fontes performáticas, `font-display: swap`).
  - Espaçamentos e raios consistentes.
- Aproveitar variáveis CSS do Hextra para sobrescrever sem brigar com o tema.
- Estados de hover/focus visíveis e consistentes em botões, cards e ícones.

## i18n — fechamento

- [ ] Toda string de UI em `i18n/pt-br.toml` e `i18n/en.toml` (nada hardcoded).
- [ ] Todo conteúdo (`content/_index.*`) traduzido.
- [ ] Data files com campos `pt-br`/`en` preenchidos nos dois idiomas.
- [ ] Datas/números formatados conforme locale, se houver.
- [ ] Seletor de idioma preserva a posição/âncora ao trocar (quando possível).
- [ ] `hreflang` correto entre as versões (Hugo gera nativamente).

## Tarefas

- [ ] Definir e aplicar paleta + tipografia em `custom.css`.
- [ ] Revisar contraste (WCAG AA) nas duas variantes de tema.
- [ ] Auditoria de tradução: grep por texto hardcoded nos partials.
- [ ] Favicon + theme-color + manifest básico.
- [ ] Open Graph image (compartilhamento social) por idioma.

## Critérios de aceite

- [ ] Visual coeso e distinto do tema padrão do Hextra.
- [ ] Dark e light mode ambos legíveis (contraste AA).
- [ ] Zero string não traduzida em qualquer idioma (checagem manual + grep).
- [ ] Troca de idioma não quebra layout nem âncoras.

## Dependências

Stages 03–06 (precisa do conteúdo montado para estilizar).
