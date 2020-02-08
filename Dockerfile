FROM node:13-alpine as runtime
WORKDIR /app

ENV NODE_ENV production

COPY package.json ./
COPY src/ ./

RUN npm install --production
EXPOSE 3000

CMD node index.js
