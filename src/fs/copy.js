import fs from "fs";
import path from "path";

export const copy = async () => {
  const to = "src/fs/files_copy";
  const from = "src/fs/files";
  try {
    fs.mkdirSync(to);
    fs.readdirSync(from).forEach((element) => {
      if (fs.lstatSync(path.join(from, element)).isFile()) {
        fs.copyFileSync(path.join(from, element), path.join(to, element));
      } else {
        copyFolderSync(path.join(from, element), path.join(to, element));
      }
    });
  } catch (err) {
    throw Error("FS operation failed");
  }
};

copy();
