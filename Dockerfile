FROM node:lts-alpine

ARG API_PORT

WORKDIR /app

COPY package*.json .

RUN yarn install

COPY . .

EXPOSE $API_PORT
