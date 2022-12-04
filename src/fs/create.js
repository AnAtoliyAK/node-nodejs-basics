import { existsSync, writeFile } from "fs";
import { getFilePath } from "../utils/getFilePath.js";
import { DEFAULT_TEXT, TEXT_MESSAGES, FILE_PATH, FILE_NAMES, TEXT_COLORS } from "../constants/common.js";

export const create = async (folderPath = FILE_PATH.FILES, fileName = FILE_NAMES.CREATE_FILE) => {
  const filePath = getFilePath(import.meta.url, folderPath + "/" + fileName);

  if (!existsSync(filePath)) {
    writeFile(filePath, DEFAULT_TEXT, function (err) {
      if (err) throw err;
      console.log(TEXT_COLORS.SUCCESS, TEXT_MESSAGES.CREATION_SUCCESSFUL);
    });
  } else {
    console.error(TEXT_COLORS.ERROR, TEXT_MESSAGES.FS_OPERATION_FAILED + TEXT_MESSAGES.EMPTY_MESSAGE + TEXT_MESSAGES.FILE_EXIST)
  }
};

create();
