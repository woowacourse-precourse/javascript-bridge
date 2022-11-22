const { Console } = require("@woowacourse/mission-utils");
const errorHandler = (recurisveCb, cb, arg) => {
  try {
    cb(arg);
  } catch (err) {
    Console.print(err.message);
    recurisveCb(cb);
  }
};

module.exports = errorHandler;
