FROM oven/bun:1.1.43-alpine AS deps
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

FROM deps AS build
COPY . .
RUN bun run build

FROM oven/bun:1.1.43-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=build /app/dist ./dist
COPY server.ts ./server.ts

EXPOSE 3000

CMD ["bun", "server.ts"]
