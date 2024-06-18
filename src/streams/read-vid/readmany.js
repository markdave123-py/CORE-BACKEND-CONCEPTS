const fs = require("node:fs/promises");

(async () => {
  const fileReadHandler = await fs.open(
    "src.txt",
    "r"
  );
  const fileWriteHandler = await fs.open("dest.txt", "w");

  const readStream = fileReadHandler.createReadStream();
    const writeStream = fileWriteHandler.createWriteStream();

    let split = "";

    readStream.on("data", (chunk) => {

        const nums = chunk.toString().split("  ");

        if (Number(nums[0]) !== Number(nums[1]) - 1) {
          if (split) {
            nums[0] = split.trim() + nums[0].trim();
          }
        }

        if (
          Number(nums[nums.length - 2] + 1 !== Number(nums[nums.length - 1]))
        ) {
          split = nums.pop()

        }

        nums.forEach((num) => {
            let n = Number(num)
            if (n % 2 === 0) {
                if (!writeStream.write(" " + n + " ")) {
                  readStream.pause();
                }
            }
        })


    });

    writeStream.on("drain", () => {
        if (chunk[0] + 1 !== chunk[1]) {
            chunk[0] = split + chunk[0];
      }
    readStream.resume();
  });
})();
