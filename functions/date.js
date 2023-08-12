function timestamp() {
  let date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let ms = date.getMilliseconds();

  return `[ ${year}-${month}-${day} ${hour}:${minute}:${second}.${ms} ]`;
}

module.exports = {
  //   date: () => {
  //     return timestamp().split("")[0];
  //   },
  timestamp,
};
