const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE, BRIDGE_SIDE } = require('../Constants');

const { Console } = MissionUtils;
const OutputView = {

  printMap(arr) {
    const upside = arr[BRIDGE_SIDE.UP].join(' | ');
    const downside = arr[BRIDGE_SIDE.DOWN].join(' | ');
    Console.print(`[ ${upside} ]\n[ ${downside} ]`);
  },

  printResult(result, arr, attempts) {
    Console.print(MESSAGE.FINAL_RESULT);
    this.printMap(arr);
    Console.print(MESSAGE.SUCCESS_OR_FAIL(result));
    Console.print(MESSAGE.NUMBER_OF_ATTEMPTS(attempts));
  },

  printStart() {
    Console.print(MESSAGE.START_GAME);
  },

  print(message) {
    Console.print(message);
  },

  close() {
    Console.close();
  },
};
module.exports = OutputView;
