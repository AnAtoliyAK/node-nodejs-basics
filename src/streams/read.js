import { createReadStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, "files/fileToRead.txt");

export const read = async () => {
  const reader = createReadStream(filePath);

  reader.on("data", function (chunk) {
    process.stdout.write(chunk.toString());
    process.exit();
  });
};

read();
