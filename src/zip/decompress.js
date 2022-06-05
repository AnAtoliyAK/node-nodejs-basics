import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";

export const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, "files/archive.gz");
  const filePathTo = path.join(__dirname, "files/fileToCompress.txt");

  const unzip = createUnzip();
  const reader = createReadStream(filePath);
  const writer = createWriteStream(filePathTo);

  reader.pipe(unzip).pipe(writer);
};

decompress();
