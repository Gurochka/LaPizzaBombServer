const jsonServer = require('json-server');
const server = jsonServer.create();

const data = require('./db/db.js');
const router = jsonServer.router(data);

const middlewares = jsonServer.defaults()

server.use(middlewares);
server.use(router);
const port = process.env.PORT || 4000;
server.listen(port)