FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV NAME_TELL=vivek
EXPOSE 3000
CMD ["npm", "start"]