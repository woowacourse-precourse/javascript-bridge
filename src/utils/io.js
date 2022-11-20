const { Console } = require('@woowacourse/mission-utils');

const Io = {
  input(message, callback) {
    Console.readLine(message, callback);
  },

  output(message) {
    Console.print(message);
  },
};

module.exports = Io;
