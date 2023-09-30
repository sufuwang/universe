FROM node:latest as install-stage
WORKDIR /app
COPY ./package.json .
COPY ./pnpm-lock.yaml .
RUN npm i -g pnpm
RUN pnpm -v
RUN pnpm i

FROM node:latest as build-stage
WORKDIR /app
COPY . /app
COPY --from=install-stage /app/node_modules /app/node_modules
RUN npm run build

FROM node:latest as production-stage
COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/publics /app/publics
COPY --from=build-stage /app/node_modules /app/node_modules
EXPOSE 3000
CMD ["node", "/app/main.js"]
