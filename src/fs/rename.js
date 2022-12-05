import { existsSync, rename as renameFs } from "fs";
import { getFilePath } from "../utils/getFilePath.js";
import { TEXT_MESSAGES, TEXT_COLORS } from "../constants/common.js";

const wrongFilePath = getFilePath(import.meta.url, "files/wrongFilename.txt");
const rightFilePath = getFilePath(import.meta.url, "files/properFilename.md");

export const rename = async () => {
  try {
    if (existsSync(wrongFilePath) || !existsSync(rightFilePath)) {
      renameFs(wrongFilePath, rightFilePath, function (err) {
        if (err) throw err;
        console.log(TEXT_MESSAGES.RENAME_SUCCESSFUL);
      });
    } else {
      console.error(TEXT_COLORS.ERROR, TEXT_MESSAGES.FS_OPERATION_FAILED)
    }
  } catch (err) {
    console.error(err);
  }
};

rename();
