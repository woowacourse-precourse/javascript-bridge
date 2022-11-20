const { Console } = require('@woowacourse/mission-utils');

const utils = {
  readLine(message, callback) {
    Console.readLine(message, callback);
    Console.close();
  },
  print(message) {
    Console.print(message);
  },
};

module.exports = utils;
