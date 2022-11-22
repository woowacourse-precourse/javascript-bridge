const { Console, Random } = require("@woowacourse/mission-utils");

const utils = {
  readLine(message, callback) {
    Console.readLine(message, callback);
  },
  print(message) {
    Console.print(message);
  },
  close() {
    Console.close();
  },
  pickNumberInRange(start, end) {
    return Random.pickNumberInRange(start, end);
  },
};

module.exports = utils;
