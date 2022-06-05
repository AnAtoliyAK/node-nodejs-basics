import fs from "fs";

export const remove = async () => {
  try {
    if (fs.existsSync("src/fs/files/fileToRemove.txt")) {
      fs.unlink("src/fs/files/fileToRemove.txt", function (err) {
        if (err) throw err;
        console.log("File is removed successfully.");
      });
    } else throw Error("FS operation failed");
  } catch (err) {
    console.error(err);
  }
};

remove();
