FROM node:latest as node

ARG API_ENDPOINT
ARG PRODUCTION_MODE
ARG ENVIRONMENT_FILE

ENV API_ENDPOINT "$API_ENDPOINT"
ENV PRODUCTION_MODE "$PRODUCTION_MODE"
ENV ENVIRONMENT_FILE "$ENVIRONMENT_FILE"

RUN printenv

WORKDIR /app
COPY . .
RUN npm install
RUN npm run config
RUN npm run ng build --prod

FROM nginx:alpine
COPY --from=node /app/dist/information-center-web /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
