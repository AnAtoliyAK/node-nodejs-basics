import crypto from "crypto";
import { readFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files/fileToCalculateHashFor.txt");

export const calculateHash = async () => {
  readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Hash operation failed " + err);
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
