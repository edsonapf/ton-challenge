FROM node:16

ARG PORT

WORKDIR /app

COPY package*.json .

RUN yarn install

COPY . .

EXPOSE $PORT
