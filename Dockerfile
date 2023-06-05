FROM amd64/node:18.6.0-slim

WORKDIR /app

COPY . .

RUN npm install

CMD npm start
