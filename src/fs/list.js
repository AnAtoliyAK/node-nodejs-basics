import { readdir } from "fs";
import { getFilePath } from "../utils/getFilePath.js";
import { TEXT_MESSAGES } from "../constants/common.js";

const directoryPath = getFilePath(import.meta.url, "files");

export const list = async () => {
  readdir(directoryPath, function (err, files) {
    if (err) {
     console.error(TEXT_MESSAGES.FS_OPERATION_FAILED + " " + err);
     return;
    }

    files.forEach(function (file) {
      console.log(file);
    });
  });
};

list();
