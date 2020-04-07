FROM node:lts-slim as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:1.12-alpine as deployer

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]