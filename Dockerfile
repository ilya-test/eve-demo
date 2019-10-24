###############################################################################
# build environment                                                           #
###############################################################################
FROM node:10

WORKDIR /usr/src/app
COPY . ./
RUN npm install

RUN npm run build
RUN npm install http-server

EXPOSE 8080

CMD [ "node", "node_modules/.bin/http-server", "build"]
