FROM node:20-alpine
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY prisma ./prisma
RUN npx prisma generate
COPY . .
CMD ["node", "src/index.js"]