const net = require('net');

const socket = net.createConnection({host: "127.0.0.1", port: 4081}, () => {
    socket.write("Asimple message coming from a client");
});