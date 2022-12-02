import { PROP_NAME_COMMAND } from "../constants/common.js";
import { TEXT_MESSAGES } from "../constants/common.js";

export const parseArgs = () => {

  const output = [];

  for (const property in process.argv) {
    if (process.argv[property].includes(PROP_NAME_COMMAND)) {
      output.push(
        `${process.argv[property].slice(PROP_NAME_COMMAND.length)} is ${process.argv[Number(property) + 1]
        }`
      );
    }
  }

  if (output.length) {
    console.log(output.join(", "));
  } else {
    throw new Error(TEXT_MESSAGES.WRONG_COMMANDS + " parseArgs");
  }
};

parseArgs();
