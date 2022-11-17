const { Console } = require('@woowacourse/mission-utils');

const Utils = Object.freeze({
  input(message, callback) {
    Console.readLine(message, callback);
  },

  print(message) {
    Console.print(message);
  },
  close() {
    Console.close();
  },
});

module.exports = Utils;
