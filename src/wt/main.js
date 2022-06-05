import { Worker } from "worker_threads";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workerPath = path.join(__dirname, "worker.js");

const systemCpuCores = os.cpus();

function runWorker(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, { workerData });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

export const performCalculations = async () => {
  const result = [];

  async function run() {
    const promises = systemCpuCores.map((_, i) => runWorker(10 + i));

    Promise.allSettled(promises).then((results) =>
      console.log(
        "RR:",
        results.map((el) => {
          const isFulfilled = el.status === "fulfilled";
          return {
            status: isFulfilled ? "resolved" : "error",
            data: isFulfilled ? el.value : null,
          };
        })
      )
    );
  }

  run().catch((err) => console.error(err));
};

performCalculations();
