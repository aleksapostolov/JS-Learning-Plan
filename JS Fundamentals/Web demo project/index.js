let http = require('http');

let server = http.createServer(handler);
server.listen(3000, ()=> console.log('server start'));

function handler(req, res) {
    res.writeHead(200);
    res.write('<h1> Hello JS </h1>');
    res.end();
}