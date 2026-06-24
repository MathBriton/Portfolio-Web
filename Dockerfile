# syntax=docker/dockerfile:1

# ─────────────────────────────────────────────────────────────
# Estágio 1 — Build do site estático com Hugo (extended)
# A imagem hugomods/hugo já traz Hugo extended + Go + Git,
# necessários para Hugo Modules (tema Hextra).
# ─────────────────────────────────────────────────────────────
FROM hugomods/hugo:exts-0.140.0 AS builder

WORKDIR /src

# Cache de módulos: copia só os manifests primeiro
COPY go.mod go.sum* ./
RUN [ -f go.mod ] && hugo mod get -u || true

# Copia o restante do projeto e gera o site de produção
COPY . .
RUN hugo --gc --minify --baseURL "${HUGO_BASEURL:-/}"

# ─────────────────────────────────────────────────────────────
# Estágio 2 — Servir os arquivos estáticos com Nginx
# ─────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runner

# Configuração custom (gzip, cache de assets, headers)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Artefato estático gerado no estágio de build
COPY --from=builder /src/public /usr/share/nginx/html

EXPOSE 80

# Healthcheck simples
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
