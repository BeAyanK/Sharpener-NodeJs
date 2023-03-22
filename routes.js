const fs = require('fs');

const requestHandler = (request, response) => {
    
    const url = request.url;
    const method = request.method;

    if (url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body></html>');
        return response.end();
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

};

//Method 1
// module.exports = requestHandler;

//Method 2
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard-coded text'
// };

//Method 3
// module.exports.handler= requestHandler;
// module.exports.someText = 'Some hard-coded text';

//Method 4
exports.handler= requestHandler;
exports.someText = 'Some hard-coded text';
