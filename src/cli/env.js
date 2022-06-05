export const parseEnv = () => {
  const ENVIRONMENT_VARIABLE_PREFIX = "RSS_";

  let output = [];

  for (const property in process.env) {
    if (property.includes(ENVIRONMENT_VARIABLE_PREFIX)) {
      output.push(`${property}=${process.env[property]}`);
    }
  }

  if (output.length) {
    console.log(output.join("; "));
  } else {
    throw new Error("Please, write right commands to check parseEnv");
  }
};

parseEnv();
