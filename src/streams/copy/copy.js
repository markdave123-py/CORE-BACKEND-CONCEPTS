const fs = require("node:fs/promises");




//memory usage: not memory efficient
// (async () => {
//         const writeHandler = await fs.open("copy.txt", "w");
//         const result = await fs.readFile("src.txt");

//         await writeHandler.write(result)

// })();


(async () => {
  const destFile = await fs.open("copy.txt", "w");
    const srcFile = await fs.open("src.txt", "r");

    const read = await srcFile.read()


})();
