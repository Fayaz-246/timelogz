const chalk = require("chalk");
const { timestamp } = require("./date");

const supportedColours = [
  "red",
  "blue",
  "cyan",
  "green",
  "yellow",
  "magenta",
  "gray",
  "white",
  "black",
];

async function timelog(obj) {
  let c;
  if (typeof obj != "object")
    throw new TypeError(`Given data should be an ${chalk.bold("Object")}`);
  if (obj.color) {
    if (!supportedColours.some((a) => obj.color.toLowerCase() === a))
      throw new TypeError("Invalid color provided.");
    c = obj.color.toLowerCase();
  } else if (!obj.color) throw new TypeError("No color provided.");
  if (!obj.text) throw new TypeError("No text provided to log");
  switch (c) {
    case "red":
      return console.log(
        `${chalk.gray(timestamp())} ${chalk.red(`${obj.text}`)}`
      );
      break;

    case "blue":
      return console.log(`${chalk.gray(timestamp())} ${chalk.blue(
        `${obj.text}`
      )}
      `);
      break;

    case "cyan":
      return console.log(`${chalk.gray(timestamp())} ${chalk.cyan(
        `${obj.text}`
      )}
        `);
      break;

    case "green":
      return console.log(`${chalk.gray(timestamp())} ${chalk.green(
        `${obj.text}`
      )}
        `);
      break;

    case "yellow":
      return console.log(`${chalk.gray(timestamp())} ${chalk.yellow(
        `${obj.text}`
      )}
        `);
      break;

    case "magenta":
      return console.log(`${chalk.gray(timestamp())} ${chalk.magenta(
        `${obj.text}`
      )}
        `);
      break;

    case "gray":
      return console.log(`${chalk.gray(timestamp())} ${chalk.gray(
        `${obj.text}`
      )}
        `);
      break;

    case "black":
      return console.log(`${chalk.gray(timestamp())} ${chalk.black(
        `${obj.text}`
      )}
        `);
      break;

    case "white":
      return console.log(`${chalk.gray(timestamp())} ${chalk.white(
        `${obj.text}`
      )}
        `);
      break;
    default:
      break;
  }
}

module.exports = { timelog };
