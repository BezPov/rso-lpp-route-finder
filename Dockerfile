FROM node:12.13

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .

EXPOSE 8081

CMD ["npm", "start"]