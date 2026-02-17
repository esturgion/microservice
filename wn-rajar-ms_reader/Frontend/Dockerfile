# Build Stage
FROM node:24-alpine AS build
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
