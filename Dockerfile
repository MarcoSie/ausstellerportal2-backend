# Dockerfile for React client in Production

# Build react client
FROM node:20-alpine as build

# Working directory be app
WORKDIR /usr/app

###  Installing dependencies
COPY package*.json ./
RUN npm install

# copy local files to app folder
COPY . .

RUN npm run build

FROM nginx:1.23-alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/app/dist /usr/share/nginx/html