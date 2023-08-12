const { timelog } = require("./functions/timeLog");
const { logMemoryUsage } = require("./functions/memLog");

module.exports = { timelog, logMemoryUsage };

logMemoryUsage();
