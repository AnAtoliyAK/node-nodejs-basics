import { Worker } from "worker_threads";
import os from "os";
import { getFilePath } from "../utils/getFilePath.js";
import { TEXT_COLORS } from "../constants/common.js";

const workerPath = getFilePath(import.meta.url, "worker.js");

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
  async function run() {
    const promises = systemCpuCores.map((_, i) => runWorker(10 + i));

    Promise.allSettled(promises).then((results) =>
      console.log(
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

  run().catch((err) => console.error(TEXT_COLORS.ERROR, err));
};

performCalculations();
