import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, "files/fileToCompress.txt");
const filePathTo = path.join(__dirname, "files/archive.gz");

export const compress = async () => {
  const gzip = zlib.createGzip();
  const reader = createReadStream(filePath);
  const writer = createWriteStream(filePathTo);

  reader.pipe(gzip).pipe(writer);
};

compress();
