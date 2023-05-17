FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /usr/src/app

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
COPY packages ./packages
COPY apps/dashboard ./apps/dashboard

RUN yarn install;
RUN rm -rf /usr/src/app/apps/dashboard/.next/cache

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app .
COPY .eslintrc.js .prettierrc .
RUN yarn build:dashboard

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production
RUN yarn global add pm2

COPY --from=builder /usr/src/app/apps/dashboard/public ./public
COPY --from=builder /usr/src/app/apps/dashboard/.next/standalone ./
COPY --from=builder /usr/src/app/apps/dashboard/.next/static ./apps/dashboard/.next/static

EXPOSE 3000

# ENV PORT 3000

ENTRYPOINT ["pm2-runtime", "start", "./apps/dashboard/server.js", "--env", "production"];