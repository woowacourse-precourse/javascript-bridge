const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../constants/Message');

const OutputView = {

  printStart() {
    Console.print(OUTPUT_MESSAGE.GAME_START);
  },

  printResult() {
    Console.print(OUTPUT_MESSAGE.GAME_RESULT);
  },

  printWin() {
    Console.print(OUTPUT_MESSAGE.GAME_WIN);
  },

  printFail() {
    Console.print(OUTPUT_MESSAGE.GAME_FAIL);
  },

  printAttemptCount(round) {
    Console.print(OUTPUT_MESSAGE.GAME_ATTEMPT + ` ${round}`);
  },
};

module.exports = OutputView;
