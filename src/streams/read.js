import { createReadStream } from "fs";
import { getFilePath } from "../utils/getFilePath.js";

const filePath =  getFilePath(import.meta.url, "files/fileToRead.txt");

export const read = async () => {
  const reader = createReadStream(filePath);

  reader.on("data", function (chunk) {
    process.stdout.write(chunk.toString());
    process.exit();
  });
};

read();
