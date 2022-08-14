FROM node:14.17.6-alpine as build
ENV NPM_CONFIG_LOGLEVEL warn
RUN mkdir -p /app
WORKDIR /app
COPY package.json ./
RUN npm install --force
# RUN npm i --legacy-peer-deps
COPY . .
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
