FROM node:14.17.3-buster AS builder
WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY src /app/src/
COPY public /app/public/
COPY .env* /app/

RUN npm install
RUN npm run build

FROM node:14.17.3-buster
COPY --from=builder /app/build /app/build
RUN npm install -g serve

ENTRYPOINT ["serve", "-s", "/app/build"]