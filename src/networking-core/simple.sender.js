const net = require('net');

const socket = net.createConnection({host: "127.0.0.1", port: 4081}, () => {
    const buff = Buffer.alloc(2)
    buff[0] = 10;
    buff[1] = 12;
    socket.write(buff);
});