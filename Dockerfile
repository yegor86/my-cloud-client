FROM node:4.0

RUN mkdir -p /usr/src/app
RUN npm install -g  \
    pm2 \
    node-gyp \
    gulp \
    bower
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install socket.io
RUN npm install --ignore-scripts
RUN bower install --allow-root
RUN gulp default

CMD [ "npm", "start" ]

EXPOSE 3000