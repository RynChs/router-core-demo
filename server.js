const http = require('http');
const fs = require('fs');
const child_process = require('child_process');

const server = http.createServer(function(request, response) {
    let pathname = request.url;
    if (pathname === '/') {
        pathname = '/index.html';
    }

    if (pathname.indexOf('.html') > -1) {
        response.writeHead(200, { "Content-Type":"text/html;charset=UTF-8" });
    } else if (pathname.indexOf('.js') > -1) {
        response.writeHead(200, { "Content-Type":"application/javascript;charset=UTF-8" });
    }

    fs.readFile(__dirname + pathname, function(err, data) {
        response.end(data);
    });
});

server.listen(9100, function() {
    console.log('http://127.0.0.1:9100/');
});

child_process.exec(`open http://127.0.0.1:9100/`);