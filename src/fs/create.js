import { existsSync, writeFile } from "fs";
import { getFilePath } from "../utils/getFilePath.js";

const filePath = getFilePath(import.meta.url, "files/fresh.txt");
const DEFAULT_TEXT = "I am fresh and young";

export const create = async () => {
  try {
    if (!existsSync(filePath)) {
      writeFile(filePath, DEFAULT_TEXT, function (err) {
        if (err) throw err;
        console.log("File is created successfully.");
      });
    } else throw Error("FS operation failed");
  } catch (err) {
    console.error(err);
  }
};

create();
