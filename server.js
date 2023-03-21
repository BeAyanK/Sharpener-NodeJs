const http = require('http');
const server = http.createServer((request, response) => {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');
console.log(request.url, request.method, request.headers);
response.setHeader('Content-Type', 'text/html');
response.write('<html><body><h1>Hello from my NodeJS Project</h1></body></html>');
response.end();
// process.exit();
})

server.listen(4000);


