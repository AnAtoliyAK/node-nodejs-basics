import { existsSync, writeFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, "files/fresh.txt");
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
