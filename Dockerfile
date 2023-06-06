FROM node:16.16.0-alpine

ENV APP_ROOT /app/

WORKDIR $APP_ROOT
RUN apk update

COPY . $APP_ROOT

RUN yarn install && yarn build

# CMD ["yarn", "start"]
# ENTRYPOINT ["index.js", ""]
