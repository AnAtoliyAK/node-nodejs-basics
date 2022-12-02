import { createWriteStream } from "fs";
import { getFilePath } from "../utils/getFilePath.js";
import { TEXT_MESSAGES } from "../constants/common.js";

const filePath =  getFilePath(import.meta.url, "files/fileToWrite.txt");

export const write = async () => {
  const writer = createWriteStream(filePath);

  process.stdout.write(TEXT_MESSAGES.WRITE_TEXT + " " + "streams/write: ");
  process.stdin.on("data", (data) => {
    writer.write(data.toString());

    process.stdout.write(`You typed ${data.toString()}`);
    process.exit();
  });
};

write();
