<<<<<<< HEAD
FROM node:16-alpine
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm" , "run" ,"dev"]
=======
FROM node:16-alpine
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm" , "run" ,"dev"]
>>>>>>> 76e839c1d2405883096bb293488646a577588584
