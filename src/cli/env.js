import { ENVIRONMENT_VARIABLE_PREFIX } from "../constants/common.js";
import { TEXT_MESSAGES } from "../constants/common.js";

export const parseEnv = () => {

  let output = [];

  for (const property in process.env) {
    if (property.includes(ENVIRONMENT_VARIABLE_PREFIX)) {
      output.push(`${property}=${process.env[property]}`);
    }
  }

  if (output.length) {
    console.log(output.join("; "));
  } else {
    throw new Error(TEXT_MESSAGES.WRONG_COMMANDS + "parseEnv");
  }
};

parseEnv();
