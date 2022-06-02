FROM node:alpine3.14

WORKDIR /freeapis

COPY package*.json /freeapis/

RUN npm ci --only=production

COPY . /freeapis/

ENV NODE_ENV=production

EXPOSE 4000

CMD [ "npm", "start"]