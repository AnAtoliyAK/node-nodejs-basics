import fs from "fs";

export const rename = async () => {
  try {
    if (
      fs.existsSync("src/fs/files/wrongFilename.txt") ||
      !fs.existsSync("src/fs/files/properFilename.md")
    ) {
      fs.rename(
        "src/fs/files/wrongFilename.txt",
        "src/fs/files/properFilename.md",
        function (err) {
          if (err) throw err;
          console.log("File is renamed successfully.");
        }
      );
    } else throw Error("FS operation failed");
  } catch (err) {
    console.error(err);
  }
};

rename();
