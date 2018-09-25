FROM mhart/alpine-node:8

COPY ./dist /app/dist
COPY ./package.json /app/

WORKDIR /app
RUN npm install --production

EXPOSE 5000
CMD npm run start
