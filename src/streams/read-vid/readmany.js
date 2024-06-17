const fs = require("node:fs/promises");

(async () => {
  const fileReadHandler = await fs.open(
    "/Users/mac/Downloads/Queue-Data-structure1.png",
    "r"
  );
  const fileWriteHandler = await fs.open("dest.png", "w");

  const readStream = fileReadHandler.createReadStream();
    const writeStream = fileWriteHandler.createWriteStream();

    let split;

  readStream.on("data", (chunk) => {
      if (!writeStream.write(chunk.toString())) {
          const nums = chunk.toString().split("");
          if (Number(nums[nums.length - 2] + 1 !== Number(nums[nums.length - 1]))) {
              split = chunk[chunk[length - 1]];
              readStream.pause();
            }
        }
    });

    writeStream.on("drain", () => {
        if (chunk[0] + 1 !== chunk[1]) {
            chunk[0] = split + chunk[0];
      }
    readStream.resume();
  });
})();
