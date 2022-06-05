import { existsSync, rename } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const wrongFilePath = path.join(__dirname, "files/wrongFilename.txt");
const rightFilePath = path.join(__dirname, "files/properFilename.md");

export const rename = async () => {
  try {
    if (existsSync(wrongFilePath) || !existsSync(rightFilePath)) {
      rename(wrongFilePath, rightFilePath, function (err) {
        if (err) throw err;
        console.log("File is renamed successfully.");
      });
    } else throw Error("FS operation failed");
  } catch (err) {
    console.error(err);
  }
};

rename();
