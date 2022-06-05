import { readFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files/fileToRead1.txt");

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
