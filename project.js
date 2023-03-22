const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;
    if (url === '/' && method === 'GET') {
        fs.readFile('message.txt', (err, data) => {
            response.setHeader('Content-Type', 'text/html');
            response.write(data);
            response.write('<html><body><form action="/message" method="POST"><input type="text" name="message" placeholder="Type Your Message..."><button type="submit">Send</button></form></body></html>');
            return response.end();
        })
    }
      
    if (url === '/message' && method === 'POST') {
        const body = [];
        request.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        })
        request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();
            });
        })
    }
    // if (url === '/' && method === 'GET') {
    //     fs.readFile('message.txt', (err, data) => {
    //         response.setHeader('Content-Type', 'text/html');
    //         response.write(data);
    //         return response.end();
    //     })
    // }
    
})

server.listen(4000);
