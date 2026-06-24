# Workflow de Git, Commits e Deploy

> Regra do projeto: **ao concluir cada trilha de stage, commitar e subir para o GitHub.**
> Repositório: https://github.com/MathBriton/Portfolio-Web

## 1. Branches

- `main` — produção. Toda push aqui dispara deploy automático na **Vercel**.
- `stage/NN-nome` — trabalho de cada stage (ex.: `stage/03-hero-avatar`).

Fluxo por stage:

```bash
git checkout -b stage/03-hero-avatar
# ... desenvolve a stage ...
git add -A
git commit -m "feat(hero): adiciona seção hero com avatar e CTAs"
git checkout main
git merge --no-ff stage/03-hero-avatar
git push origin main
```

> Em projeto solo, é aceitável commitar direto na `main` ao fim de cada stage.
> O importante é: **fim de stage = commit + push**.

## 2. Convenção de mensagens de commit

Padrão **Conventional Commits** com o **tipo em inglês** (padrão da indústria) e a
**descrição em pt-br** (preferência do projeto). Imperativo, minúsculo, sem ponto final.

```
<tipo>(<escopo opcional>): <descrição em pt-br no imperativo>
```

### Tipos

| Tipo | Uso |
|------|-----|
| `feat` | nova funcionalidade/seção |
| `fix` | correção de bug |
| `docs` | documentação / specs |
| `style` | formatação, CSS, visual (sem mudar lógica) |
| `refactor` | refatoração sem mudar comportamento |
| `chore` | infra, build, configs, dependências |
| `perf` | melhoria de performance |
| `ci` | pipeline / GitHub Actions |
| `content` | atualização de conteúdo/dados (textos, projetos) |

### Exemplos (um por stage)

| Stage | Commit sugerido |
|-------|-----------------|
| Spec inicial | `docs: cria spec-driven development do portfólio em stages` |
| 01 Fundação | `chore: configura projeto Hugo com tema Hextra e i18n pt-br/en` |
| 02 Arq. info | `feat(dados): modela projetos, skills e redes em data files` |
| 03 Hero | `feat(hero): adiciona seção hero com avatar e CTAs` |
| 04 Carrossel | `feat(projetos): implementa carrossel dos 4 projetos` |
| 05 Skills | `feat(skills): adiciona seções de skills e jornada de aprendizado` |
| 06 Contato | `feat(contato): adiciona links sociais e seção de contato` |
| 07 Tema/i18n | `style(tema): aplica identidade visual e finaliza tradução en` |
| 08 SEO/Deploy | `chore(deploy): configura SEO, performance e publicação na Vercel` |
| Infra Docker | `chore(docker): adiciona ambiente de produção com Docker e Nginx` |

### Corpo do commit (opcional)

Para mudanças maiores, descreva o "porquê" em pt-br:

```
feat(projetos): implementa carrossel dos 4 projetos

- Renderiza a partir de data/projects.yaml ordenado por `order`
- Navegação por teclado, toque e mouse
- Respeita prefers-reduced-motion
```

## 3. Checklist de fim de stage (antes do push)

- [ ] `hugo --gc --minify` builda sem erro (ou `docker compose up --build web`).
- [ ] Conteúdo presente em PT-BR e EN.
- [ ] Critérios de aceite da stage atendidos.
- [ ] `git status` limpo após o commit.
- [ ] `git push origin main` concluído.

## 4. Segurança — nunca commitar segredos ⚠️

Regra do projeto: **segurança é prioridade.** Antes de qualquer push:

1. **Segredos ficam fora do git.** Tokens, API keys, credenciais → painel de
   *Environment Variables* da **Vercel** (e `.env` local, que é ignorado).
2. **`.gitignore` já cobre** `.env*`, `.vercel/`, `resources/_gen`, `public/`.
3. **Varredura rápida antes do commit** (não deve retornar nada sensível):

   ```bash
   git diff --cached -U0 | grep -iE "(api[_-]?key|secret|token|password|passwd|bearer|private[_-]?key|BEGIN .*PRIVATE KEY)" || echo "ok: sem segredos óbvios"
   ```

4. **O que pode ir ao repo:** config pública (`vercel.json`), e-mail de contato
   público, handles sociais. **O que não pode:** qualquer credencial, token de
   deploy, chave de analytics privada, `.env`.
5. **Se um segredo vazar:** revogar/rotacionar a credencial imediatamente
   (remover do histórico não basta — considere-a comprometida).

## 5. Deploy (Vercel)

- A Vercel observa a branch `main` e faz deploy a cada push.
- Preview deploys automáticos em Pull Requests (se usados).
- Configuração em [`vercel.json`](../vercel.json) (framework Hugo, `HUGO_VERSION` fixada).
- **Docker** ([`Dockerfile`](../Dockerfile)) serve para **paridade de produção local**
  e como plano B de deploy em qualquer host de contêiner — não substitui a Vercel.
