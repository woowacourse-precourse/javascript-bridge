const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/message');

const OutputView = {
  printMap(map) {
    Console.print(MESSAGE.OUTPUT.MAP(map));
  },

  printResult(map, isGameSuccess, attempt) {
    Console.print(MESSAGE.OUTPUT.GAME_RESULT);
    this.printMap(map);
    Console.print(MESSAGE.OUTPUT.IS_GAME_SUCCESS(isGameSuccess));
    Console.print(MESSAGE.OUTPUT.ATTEMPT(attempt));
    Console.close();
  },

  printGameStart() {
    Console.print(MESSAGE.OUTPUT.GAME_START);
  },

  printError(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
