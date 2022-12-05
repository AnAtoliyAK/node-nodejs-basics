import { existsSync, unlink } from "fs";
import { getFilePath } from "../utils/getFilePath.js";
import { TEXT_MESSAGES, TEXT_COLORS } from "../constants/common.js";

const filePath = getFilePath(import.meta.url, "files/fileToRemove.txt");

export const remove = async () => {
  try {
    if (existsSync(filePath)) {
      unlink(filePath, function (err) {
        if (err) throw err;
        console.log(TEXT_MESSAGES.REMOVE_SUCCESSFUL);
      });
    } else {
      console.error(TEXT_COLORS.ERROR, TEXT_MESSAGES.FS_OPERATION_FAILED)
    }
  } catch (err) {
    console.error(err);
  }
};

remove();
