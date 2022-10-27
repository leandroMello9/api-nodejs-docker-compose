FROM node:16.17.0
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY src /app/src
RUN yarn
RUN yarn build
CMD ["node", "./dist/server.js"]
