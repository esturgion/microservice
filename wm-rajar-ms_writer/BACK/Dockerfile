FROM node:20-alpine AS build
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tsc

FROM node:20-alpine AS production
WORKDIR /src
COPY --from=build /src/dist ./dist
COPY --from=build /src/package*.json ./
RUN npm ci --only=production
EXPOSE 3000
CMD ["node", "dist/index.js"]
