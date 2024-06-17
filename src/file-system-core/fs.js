const fs = require("fs/promises");
const { buffer } = require("stream/consumers");

// const content = fs.readFileSync("./file.txt")

// console.log(content.toString("utf-8++"))

(async () => {

    const createFile = async (path) => {
        let existingFile;
        try {
            existingFile = await fs.open(path, "r");
            existingFile.close();
            return console.log("File has already been created");
        } catch (error) {
            const newFile = await fs.open(path, "w");
            console.error("file has been created");
            newFile.close();

        }

    }

    const deleteFile = async (path) => {
        try {
            await fs.unlink(path);
            console.log("File has been deleted");
        } catch (error) {
            if (error.code === "ENOENT") {
                console.error("File does not exist");
            } else {
                console.error("Error deleting file!!");
            }

        }
    }

    const renameFile = async (oldPath, newPath) => {

        try {
            await fs.rename(oldPath, newPath);
        } catch (error) {
            console.error("File does not exist");
        }
    }

    let addedContent;
    const addToFile = async (path, content) => {
        if (addedContent) {
            return
        }
        addedContent = content; 
        try {
            console.log(path, content);
            const file = await fs.open(path, "a");
            await file.write(content);

            file.close();
        } catch (error) {
            console.log(error);

            console.error("File does not exist", error);
        }
    }

    const CREATE_FILE = "create the file";
    const DELETE_FILE = "delete the file";
    const RENAME_FILE = "rename the file";
    const ADD_TO_FILE = "add to the file";



  const commandFileHandler = await fs.open("./command.txt", "r");

  commandFileHandler.on("change", async () => {
    //size of our file
    const size = (await commandFileHandler.stat()).size;
    //allocate our buffer with the size of the file
    const buff = Buffer.alloc(size);
    //how many bytes we want to read
    const length = buff.byteLength;
    //where we want to start reading from the file
    const position = 0;
    //the locating where we want to start filling the buffer
    const offset = 0;

    //we always want to read the whole file
    await commandFileHandler.read(buff, offset, length, position);
    const command = buff.toString("utf-8");

    //create a file:
      //create a file <path>
      if (command.includes(CREATE_FILE)) {
          const path = command.substring(CREATE_FILE.length + 1);
          createFile(path);

      }
      if (command.includes(DELETE_FILE)) {
          const path = command.substring(DELETE_FILE.length + 1);
          deleteFile(path);
      }
      if (command.includes(RENAME_FILE)) {
          _idx = command.indexOf(" to ");
          oldPath = command.substring(RENAME_FILE.length + 1, _idx);
          newPath = command.substring(_idx + 4);
        renameFile(oldPath, newPath);

      }
      if(command.includes(ADD_TO_FILE)){
          _idx = command.indexOf(" this content: ");
          path = command.substring(ADD_TO_FILE.length + 1, _idx);
          content = command.substring(_idx + 15);
          addToFile(path, content);
      }
  });


  //we have our watcher
  const watcher = fs.watch("./command.txt");

  for await (const event of watcher) {
    if (event.eventType === "change") {
      commandFileHandler.emit("change");

      console.log("Command file has been changed");
    }
  }
})();
