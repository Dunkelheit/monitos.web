FROM node:6-alpine

RUN mkdir -p /opt/monitos.web

WORKDIR /opt/monitos.web
ADD . /opt/monitos.web

RUN npm install --production

EXPOSE 9183

CMD ["node", "server/index.js"]
