FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 
RUN npm update
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]