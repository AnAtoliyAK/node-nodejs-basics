import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, "files/fileToWrite.txt");

export const write = async () => {
  const writer = createWriteStream(filePath);

  process.stdout.write("Please type some text to check streams/write: ");
  process.stdin.on("data", (data) => {
    writer.write(data.toString());

    process.stdout.write(`You typed ${data.toString()}`);
    process.exit();
  });
};

write();
