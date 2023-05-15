FROM node:18-alpine AS base

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn build:club

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /usr/src/app

ENV NODE_ENV=production

RUN yarn global add pm2
COPY --from=builder /usr/src/app/apps/club/public ./public
COPY --from=builder /usr/src/app/apps/club/.next/standalone/apps/club ./
COPY --from=builder /usr/src/app/apps/club/.next/static ./.next/static

EXPOSE 3000

ENV PORT 300

Entrypoint ["pm2", "start", "server.js", "--name", "megabrain-club"];