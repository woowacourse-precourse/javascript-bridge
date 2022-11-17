const { Console } = require('@woowacourse/mission-utils');

class Utils {
  static input(message, callback) {
    Console.readLine(message, callback);
  }

  static print(message) {
    Console.print(message);
  }
}

module.exports = Utils.input;
module.exports = Utils.print;
