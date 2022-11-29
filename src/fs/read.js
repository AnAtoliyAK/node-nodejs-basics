import { readFile } from "fs";
import { getFilePath } from "../utils/getFilePath.js";

const filePath = getFilePath(import.meta.url, "files/fileToRead.txt");

export const read = async () => {
  readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("FS operation failed " + err);
      return;
    }
    console.log(data);
  });
};

read();
