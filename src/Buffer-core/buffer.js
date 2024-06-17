const { Buffer } = require("buffer");

const buff = Buffer.alloc(2);

buff[0] = 72
buff.writeInt8(-10, 1)

buff1 = Buffer.from([79, 101, 37])

console.log(buff1.toString("utf-8"))

console.log(buff.toString('base64'));



// buff.write("sTt", "utf-8")

// console.log(buff.toJSON())

// const buff2 = Buffer.from("STRING", "utf-8")
// console.log(buff2)

// const buff3 = Buffer.from([116, 112, 9, 255])

// console.log(buff3.toString("utf-8"), buff3)
