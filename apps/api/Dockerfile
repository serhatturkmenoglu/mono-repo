FROM node:14-alpine
WORKDIR /app
COPY ./dist/apps/api .
COPY ./package*.json .
RUN npm install --production
COPY ./node_modules .
ENV PORT=3333
EXPOSE ${PORT}

CMD node ./main.js