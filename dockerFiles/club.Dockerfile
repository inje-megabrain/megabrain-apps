FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /usr/src/app

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
COPY packages ./packages
COPY apps/club ./apps/club

RUN yarn install;
RUN rm -rf /usr/src/app/apps/club/.next/cache

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app ./
COPY .eslintrc.js .prettierrc ./
RUN yarn build:club

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production
RUN yarn global add pm2

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /usr/src/app/apps/club/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/apps/club/.next/static ./apps/club/.next/static
COPY --from=builder /usr/src/app/apps/club/public ./apps/club/public

EXPOSE 3000

# ENV PORT 3000

ENTRYPOINT ["pm2-runtime", "start", "./apps/club/server.js", "--env", "production"];