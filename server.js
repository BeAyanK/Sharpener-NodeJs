const http = require('http');

const routes = require('./routes');

//Method 1
// const server = http.createServer(routes)

//Method 2, 3 and 4
console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(6000);
