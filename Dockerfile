FROM node:alpine3.18

ENV APP_ROOT /app/

WORKDIR $APP_ROOT
RUN apk upgrade

# RUN addgroup app && adduser -S -G app app && chown -R app /app
# USER app

COPY . $APP_ROOT
RUN yarn install && yarn build

CMD ["yarn", "start"]
# ENTRYPOINT ["index.js", ""]
