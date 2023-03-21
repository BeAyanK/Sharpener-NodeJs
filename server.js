const http = require('http');
const server = http.createServer((request, response) => {
    const url = request.url;
    if (url === '/home') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html><body><h1>Welcome Home.</h1></body></html>');
        // return response.end();
    }
    if (url === '/about') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html><body><h1>Welcome to About Us page.</h1></body></html>');
        // return response.end();
    }
    if (url === '/node') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html><body><h1>Welcome to my NodeJS Project.</h1></body></html>');
        // return response.end();
    }

})

server.listen(4000);
