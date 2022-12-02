import { existsSync, unlink } from "fs";
import { getFilePath } from "../utils/getFilePath.js";
import { TEXT_MESSAGES } from "../constants/common.js";

const filePath = getFilePath(import.meta.url, "files/fileToRemove.txt");

export const remove = async () => {
  try {
    if (existsSync(filePath)) {
      unlink(filePath, function (err) {
        if (err) throw err;
        console.log("File is removed successfully.");
      });
    } else throw Error(TEXT_MESSAGES.FS_OPERATION_FAILED);
  } catch (err) {
    console.error(err);
  }
};

remove();
