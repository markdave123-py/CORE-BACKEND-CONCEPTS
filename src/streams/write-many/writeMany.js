// const fs = require("fs").promises;
const fs = require("node:fs/promises");

//this process uses
//100% of the CPU (one core)
//40mb of memory
// runs in 9.9s





const streamHandler = async () => {
  console.time("writeMany");

  const file = await fs.open("test.txt", "w");

  const stream = await file.createWriteStream();

  let i = 0;

  const writeMany = () => {

    while (i < 1000000) {
      const buff = Buffer.from(`${i}`, "utf-8");

      if (!stream.write(` ${buff} `)) {
        break;
      }

      i++;
    }

  }

  writeMany();

  stream.on("drain", () => {
    writeMany();
  });

  console.timeEnd("writeMany");
};

streamHandler();


// const file = fs.open("test.txt", "w");

// const stream = file.createWriteStream();

// console.log(stream.writableHighWaterMark, stream.writableLength);

// const buff = Buffer.alloc(16383, "a");

// const writeMany = async (path, content, n) => {
//   try {
//     console.time("writeMany");

//       fs.open(path, 'w', (err, fileId) => {
//           let buff  = Buffer.from(content);
//           for (let i = 0; i < n; i++) {
//             fs.writeSync(fileId, ` ${buff} `, "/n");
//           }
//         console.timeEnd("writeMany");
//       })

//   } catch (error) {
//     console.error("Error writing to file", error);
//   }
// };
