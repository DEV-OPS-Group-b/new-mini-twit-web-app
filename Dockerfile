FROM node:14.17.3-buster
WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

COPY . .

CMD ["npm", "run", "start"]