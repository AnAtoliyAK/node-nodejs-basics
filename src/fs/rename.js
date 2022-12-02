import { existsSync, rename as renameFs } from "fs";
import { getFilePath } from "../utils/getFilePath.js";
import { TEXT_MESSAGES } from "../constants/common.js";

const wrongFilePath = getFilePath(import.meta.url, "files/wrongFilename.txt");
const rightFilePath = getFilePath(import.meta.url, "files/properFilename.md");

export const rename = async () => {
  try {
    if (existsSync(wrongFilePath) || !existsSync(rightFilePath)) {
      renameFs(wrongFilePath, rightFilePath, function (err) {
        if (err) throw err;
        console.log(TEXT_MESSAGES.RENAME_SUCCESSFUL);
      });
    } else throw Error(TEXT_MESSAGES.FS_OPERATION_FAILED);
  } catch (err) {
    console.error(err);
  }
};

rename();
