import { ENVIRONMENT_VARIABLE_PREFIX, TEXT_MESSAGES, TEXT_COLORS } from "../constants/common.js";

export const parseEnv = () => {

  let output = [];

  for (const property in process.env) {
    if (property.includes(ENVIRONMENT_VARIABLE_PREFIX)) {
      output.push(`${property}=${process.env[property]}`);
    }
  }

  if (output.length) {
    console.log(TEXT_COLORS.SUCCESS, output.join("; "));
  } else {
    console.error(TEXT_COLORS.ERROR, TEXT_MESSAGES.WRONG_COMMANDS + "parseEnv");
  }
};

parseEnv();
