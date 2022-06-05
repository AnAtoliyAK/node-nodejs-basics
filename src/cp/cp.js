import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, "files/script.js");

export const spawnChildProcess = async (args) => {
  spawn("node", [filePath, ...args], {
    stdio: [process.stdin, process.stdout, process.stderr],
  });
};

const runSpawn = () => {
  const PROP_NAME_COMMAND = "--";
  let args = [];

  for (const property in process.argv) {
    if (process.argv[property].includes(PROP_NAME_COMMAND)) {
      args.push(`${process.argv[property].slice(2)}`);
    }
  }
  spawnChildProcess(args);
};

runSpawn();
