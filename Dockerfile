FROM node:16
RUN npm install pm2 -g
WORKDIR /app/src
COPY . .
RUN yarn && yarn build && yarn cache clean
RUN mv .output ../
COPY ecosystem.config.js ../
WORKDIR /app/
RUN rm -rf src/

CMD ["pm2-runtime", "ecosystem.config.js"]
EXPOSE 3098
