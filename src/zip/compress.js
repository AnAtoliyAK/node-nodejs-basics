import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";
import { getFilePath } from "../utils/getFilePath.js";

const filePath = getFilePath(import.meta.url, "files/fileToCompress.txt");
const filePathTo = getFilePath(import.meta.url, "files/archive.gz");

export const compress = async () => {
  const gzip = zlib.createGzip();
  const reader = createReadStream(filePath);
  const writer = createWriteStream(filePathTo);

  reader.pipe(gzip).pipe(writer);
};

compress();
