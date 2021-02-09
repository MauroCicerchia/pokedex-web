FROM node:12

WORKDIR /app

COPY ./build /app/build

RUN npm install -g serve

CMD [ "serve", "-s", "build" ]
