const { Buffer } = require("buffer");

buf = Buffer.alloc(3);

buf[0] = 72;
buf[1] = 105;
buf[2] = 33;

console.log(buf.toString("binary"));