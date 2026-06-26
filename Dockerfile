# syntax=docker/dockerfile:1

# ─────────────────────────────────────────────────────────────
# Estágio 1 — Build do SPA (Vite + React) com Node
# ─────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Cache de dependências: copia só os manifests primeiro
COPY package.json package-lock.json ./
RUN npm ci

# Copia o restante e gera o bundle de produção em /app/dist
COPY . .
RUN npm run build

# ─────────────────────────────────────────────────────────────
# Estágio 2 — Servir os arquivos estáticos com Nginx
# ─────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
