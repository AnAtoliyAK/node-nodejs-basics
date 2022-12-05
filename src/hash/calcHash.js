import crypto from "crypto";
import { readFile } from "fs";
import { getFilePath } from "../utils/getFilePath.js";
import { TEXT_MESSAGES } from "../constants/common.js";

const filePath = getFilePath(import.meta.url, "files/fileToCalculateHashFor.txt");

export const calculateHash = async () => {
  readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(TEXT_MESSAGES.HASH_OPERATION_FAILED + " " + err);
      return;
    }

    const hashNode = (data) =>
      new Promise((resolve) =>
        setTimeout(
          () => resolve(crypto.createHash("sha256").update(data).digest("hex")),
          0
        )
      );

    hashNode(JSON.stringify(data)).then(console.log);
  });
};

calculateHash();
