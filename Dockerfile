FROM node:13

WORKDIR /server

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install 

COPY . . 

CMD ["npm","start"]