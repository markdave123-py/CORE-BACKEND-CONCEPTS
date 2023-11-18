const buff = Buffer.alloc(8)

buff.write("sTt", "utf-8")

console.log(buff.toJSON())

const buff2 = Buffer.from("STRING", "utf-8")
console.log(buff2)

const buff3 = Buffer.from([116, 112, 9, 255])

console.log(buff3.toString("utf-8"), buff3)