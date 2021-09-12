FROM node

WORKDIR /

COPY . .

RUN npm i 

CMD node main.js