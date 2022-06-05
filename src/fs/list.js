import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directoryPath = path.join(__dirname, "files");

export const list = async () => {
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("FS operation failed: " + err);
    }
    files.forEach(function (file) {
      console.log(file);
    });
  });
};

list();
