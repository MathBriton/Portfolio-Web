# Stage 06 — Contato & Redes sociais

**Objetivo:** disponibilizar canais de contato e links sociais de forma clara,
acessível e presente tanto na seção de contato quanto no footer.

## Links (fonte: `data/socials.yaml`)

| Canal | Tipo | Observação |
|-------|------|-----------|
| **GitHub** | `https://github.com/<user>` | abrir em nova aba |
| **LinkedIn** | `https://linkedin.com/in/<user>` | abrir em nova aba |
| **Instagram** | `https://instagram.com/<user>` | abrir em nova aba |
| **E-mail** | `mailto:mathhbrito@gmail.com` | já confirmado |

> Substituir `<user>` pelos handles reais antes do go-live (ver checklist Stage 08).

## Seção de contato

- Título + frase de chamada ("Vamos conversar?" / "Let's talk?").
- Botões/ícones grandes para cada rede.
- E-mail clicável (`mailto:`) + botão "copiar e-mail" (opcional).
- **Sem formulário de backend** (site estático). Se desejar formulário futuramente:
  usar serviço externo (Formspree/Web3Forms) — registrar como melhoria futura.

## Footer

- Réplica compacta dos ícones sociais.
- Copyright + ano dinâmico (`{{ now.Year }}`).
- Link "voltar ao topo".

## Acessibilidade dos links sociais

- `aria-label` traduzido por ícone (ex.: "Perfil no GitHub" / "GitHub profile").
- Links externos: `rel="noopener noreferrer"` + `target="_blank"`.
- Ícones com tamanho de alvo de toque ≥ 44×44px.

## Tarefas

- [ ] `layouts/partials/contact.html` iterando `data/socials.yaml`.
- [ ] `layouts/partials/footer.html` com ícones + copyright + back-to-top.
- [ ] SVGs de ícones (github, linkedin, instagram, envelope).
- [ ] `aria-label` via `i18n/`.

## Critérios de aceite

- [ ] Os 4 canais funcionam (e-mail abre cliente; sociais abrem em nova aba).
- [ ] Ícones acessíveis por teclado e leitor de tela.
- [ ] Footer presente em ambos os idiomas.
- [ ] Adicionar/remover rede = editar só `data/socials.yaml`.

## Dependências

Stages 01 e 02.
