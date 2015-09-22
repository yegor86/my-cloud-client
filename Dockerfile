FROM node:4.0

RUN mkdir -p /usr/src/app
RUN npm install nodemon -g
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

CMD [ "gulp", "default" ]
CMD [ "npm", "start" ]

EXPOSE 3000