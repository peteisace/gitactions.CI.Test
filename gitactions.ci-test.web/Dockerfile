FROM node:15.12 as build-deps
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

#install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
# RUN npm install react-scripts@4.0.3 -g --silent

# add the app
COPY . ./

EXPOSE 3000

# start it
CMD ["npm", "run", "start"]
