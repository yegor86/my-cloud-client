FROM node:4.0

RUN mkdir -p /usr/src/app
RUN npm install nodemon -g
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install -g bower
RUN npm install -g node-gyp
RUN npm install socket.io
RUN npm install
COPY . /usr/src/app
RUN npm install -g gulp
RUN gulp default

CMD [ "npm", "start" ]

EXPOSE 3000