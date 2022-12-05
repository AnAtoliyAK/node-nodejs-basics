import { spawn } from "child_process";
import { PROP_NAME_COMMAND } from "../constants/common.js";
import { getFilePath } from "../utils/getFilePath.js";

const filePath = getFilePath(import.meta.url, "files/script.js");

export const spawnChildProcess = async (args) => {
  spawn("node", [filePath, ...args], {
    stdio: [process.stdin, process.stdout, process.stderr],
  });
};

const runSpawn = () => {
  let args = [];

  for (const property in process.argv) {
    if (process.argv[property].includes(PROP_NAME_COMMAND)) {
      args.push(`${process.argv[property].slice(PROP_NAME_COMMAND.length)}`);
    }
  }
  spawnChildProcess(args);
};

runSpawn();
