const { Console } = require('@woowacourse/mission-utils');
const { PRINT_MESSAGE, RESULT } = require('../utils/constants');

const OutputView = {
  printStartMessage() {
    Console.print(PRINT_MESSAGE.START);
  },

  printMap(bridgeMap) {
    bridgeMap.forEach((element) => Console.print(element));
    Console.print('');
  },

  printResult(bridgeMap, count, result) {
    Console.print(PRINT_MESSAGE.GAME_RESULT);
    this.printMap(bridgeMap);
    Console.print(PRINT_MESSAGE.SUCCESS_OR_FAILURE + result);
    Console.print(PRINT_MESSAGE.TRY_COUNT + count);
    Console.close();
  },
};

module.exports = OutputView;
