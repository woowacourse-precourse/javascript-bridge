const { Console } = require('@woowacourse/mission-utils');

class IO {
  static input(message, callback) {
    Console.readLine(message, callback);
  }

  static output(message) {
    Console.print(message);
  }

  static close() {
    Console.close();
  }
}

module.exports = IO;
