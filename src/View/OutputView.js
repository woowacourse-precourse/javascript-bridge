const { Console } = require('@woowacourse/mission-utils');
const SYSTEM_MESSAGE = require('../../constants/system message');

const OutputView = {
  printStart() {
    Console.print(SYSTEM_MESSAGE.START);
  },

  printMap(bridgeMap) {
    bridgeMap.forEach(Console.print);
  },

  printResult(bridgeMap, playCount, isSuccess) {
    Console.print(SYSTEM_MESSAGE.RESULT);
    OutputView.printMap(bridgeMap);
    Console.print(`${SYSTEM_MESSAGE.IS_SUCCESS}${isSuccess}`);
    Console.print(`${SYSTEM_MESSAGE.TRY_COUNT}${playCount}`);
    Console.close();
  },
};

module.exports = OutputView;
