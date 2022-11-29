import { existsSync, rename } from "fs";
import { getFilePath } from "../utils/getFilePath.js";

const wrongFilePath =  getFilePath(import.meta.url, "files/wrongFilename.txt");
const rightFilePath =  getFilePath(import.meta.url, "files/properFilename.md");

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
