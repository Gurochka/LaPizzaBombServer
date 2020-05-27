const jsonServer = require('json-server');
const server = jsonServer.create();

const data = require('./db/db.js');
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on 3000')
})