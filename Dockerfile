FROM node:12
ENV NODE_ENV=production

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install
RUN npm install -g @angular/cli@13
RUN npm install -g typescript

COPY . /app
EXPOSE 4200
CMD ng serve --host 0.0.0.0