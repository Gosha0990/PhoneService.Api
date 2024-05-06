# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

RUN npm install

ARG MAIN_HOST_API

ENV MAIN_HOST_API $MAIN_HOST_API



# add app
COPY . .

# start app
CMD ["npm", "start"] 