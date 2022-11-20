const { Console } = require('@woowacourse/mission-utils');

class Utils {
  static readLine(message, callback) {
    Console.readLine(message, callback);
    Console.close();
  }

  static print(message) {
    Console.print(message);
  }
}

module.exports = Utils;
