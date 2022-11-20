const { Console } = require('@woowacourse/mission-utils');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class Utils {
  static readLine(message, callback) {
    Console.readLine(message, callback);
    Console.close();
  }

  static print(message) {
    Console.print(message);
  }

  static makeRandom() {
    return BridgeRandomNumberGenerator.generate();
  }

  static printAllInList(list) {
    return list.reduce((allMoves, move) => allMoves + `, ${move}`, '').slice(2);
  }
}

module.exports = Utils;
