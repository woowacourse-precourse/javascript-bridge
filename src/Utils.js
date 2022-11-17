const { Console } = require('@woowacourse/mission-utils');

class Utils {
  static input(message, callback) {
    Console.readLine(message, callback);
  }
}

module.exports = Utils;
