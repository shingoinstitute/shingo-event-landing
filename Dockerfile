FROM node:8-alpine as build
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent
COPY . .
ENV NODE_ENV production
RUN npm run build

FROM nginx:alpine as prod
COPY --from=build /build /usr/share/nginx/html
