import { readdir } from "fs";
import { getFilePath } from "../utils/getFilePath.js";

const directoryPath = getFilePath(import.meta.url, "files");

export const list = async () => {
  readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("FS operation failed: " + err);
    }

    files.forEach(function (file) {
      console.log(file);
    });
  });
};

list();
