# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /ecommerce

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install webpack-cli --save
RUN npm install webpack-dev-server --save

# add `/app/node_modules/.bin` to $PATH
ENV PATH /ecommerce/node_modules/.bin:$PATH
# add app
COPY . ./

# start app
CMD ["npm", "start"]
