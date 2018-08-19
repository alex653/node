var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<div id="maid">-<div>');
    res.end('Hello, world!');
    
}).listen(process.env.PORT || 8080);

