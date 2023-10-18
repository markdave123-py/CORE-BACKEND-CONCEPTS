const http = require('http');

const port = 4080;
const hostName = "172.16.122.251";


const server = http.createServer((req, res) => {
    const data = {message : 'Hello World'};

    res.setHeader('Content-Type', 'application/json');
    res.setHeader("connection", "close");
    res.statusCode = 200;

    res.end(JSON.stringify(data));
});

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
});