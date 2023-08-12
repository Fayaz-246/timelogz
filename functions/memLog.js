const { timelog } = require("./timeLog");

async function logMemoryUsage(time) {
  const memoryData = process.memoryUsage();
  const memoryUsage = {
    rss: `${formatMemoryUsage(memoryData.rss)} -> RSS`,
    heapTotal: `${formatMemoryUsage(memoryData.heapTotal)} -> Total Size`,
    heapUsed: `${formatMemoryUsage(memoryData.heapUsed)} -> Total Used`,
    external: `${formatMemoryUsage(memoryData.external)} -> V8 external memory`,
  };
  if (time || time === true) {
    timelog({
      text: `${memoryUsage.rss}`,
      color: "red",
    });
    timelog({
      text: `${memoryUsage.heapTotal}`,
      color: "red",
    });
    timelog({
      text: `${memoryUsage.heapUsed}`,
      color: "red",
    });
    timelog({
      text: `${memoryUsage.external}`,
      color: "red",
    });
  } else if (!time || time === false) {
    console.log(`${memoryUsage.rss}`);
    console.log(`${memoryUsage.heapTotal}`);
    console.log(`${memoryUsage.heapUsed}`);
    console.log(`${memoryUsage.external}`);
  }
}

module.exports = { logMemoryUsage };

function formatMemoryUsage(data) {
  return `${Math.round((data / 1024 / 1024) * 100) / 100} MB`;
}
global.clearline = () => process.stdout.clearLine();
