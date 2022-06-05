import fs from "fs";

export const create = async () => {
  try {
    if (!fs.existsSync("src/fs/files/fresh.txt")) {
      fs.writeFile(
        "src/fs/files/fresh.txt",
        "I am fresh and young",
        function (err) {
          if (err) throw err;
          console.log("File is created successfully.");
        }
      );
    } else throw Error("FS operation failed");
  } catch (err) {
    console.error(err);
  }
};

create();
