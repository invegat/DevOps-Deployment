# Fill in this Dockerfile to build your Docker image
# escape=`
FROM node:8.7
WORKDIR /
COPY package.json package-lock.json ./

RUN npm install

COPY . .
EXPOSE 8081
CMD ["npm", "start"]


