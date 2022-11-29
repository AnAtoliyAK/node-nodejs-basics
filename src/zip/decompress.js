import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";
import { getFilePath } from "../utils/getFilePath.js";

export const decompress = async () => {
  const filePath = getFilePath(import.meta.url, "files/archive.gz");
  const filePathTo = getFilePath(import.meta.url, "files/fileToCompress.txt");

  const unzip = createUnzip();
  const reader = createReadStream(filePath);
  const writer = createWriteStream(filePathTo);

  reader.pipe(unzip).pipe(writer);
};

decompress();
