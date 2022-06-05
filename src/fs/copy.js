import { mkdirSync, readdirSync, lstatSync, copyFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
  const copyFolderSync = (from, to) => {
    mkdirSync(to);

    readdirSync(from).forEach((element) => {
      if (lstatSync(path.join(from, element)).isFile()) {
        copyFileSync(path.join(from, element), path.join(to, element));
      } else {
        copyFolderSync(path.join(from, element), path.join(to, element));
      }
    });
  };

  const fromPath = path.join(__dirname, "files");
  const toPath = path.join(__dirname, "files_copy");

  try {
    copyFolderSync(fromPath, toPath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

copy();
