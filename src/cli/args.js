export const parseArgs = () => {
  const PROP_NAME_COMMAND = "--";

  const output = [];

  for (const property in process.argv) {
    if (process.argv[property].includes(PROP_NAME_COMMAND)) {
      output.push(
        `${process.argv[property].slice(2)} is ${
          process.argv[Number(property) + 1]
        }`
      );
    }
  }

  if (output.length) {
    console.log(output.join(", "));
  } else {
    throw new Error("Please, write right commands to check parseArgs");
  }
};

parseArgs();
