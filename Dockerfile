FROM node:14.18-alpine3.14

WORKDIR /app

COPY package*.json ./

RUN npx ci

COPY . .

CMD ["npm", "run", "dev"]