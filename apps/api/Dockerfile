FROM node:14-alpine as deps
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY dist/apps/nest-app/package*.json ./
RUN npm install

FROM node:16.14.2-alpine as runner
RUN apk add --no-cache dumb-init
ENV NODE_ENV production
WORKDIR /usr/src/app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001
COPY --chown=nestjs:nodejs dist/apps/nest-app .
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /usr/src/app/package.json ./package.json
USER nestjs
EXPOSE 3333
ENV PORT 3333

CMD ["dumb-init", "node", "main.js"]