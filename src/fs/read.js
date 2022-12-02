import { readFile } from "fs";
import { getFilePath } from "../utils/getFilePath.js";
import { TEXT_MESSAGES } from "../constants/common.js";

const filePath = getFilePath(import.meta.url, "files/fileToRead.txt");

export const read = async () => {
  readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(TEXT_MESSAGES.FS_OPERATION_FAILED + " " + err);
      return;
    }
    console.log(data);
  });
};

read();
