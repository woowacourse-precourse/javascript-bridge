const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../constants/Message');
const PlayersMap = require('../PlayersMap');

const OutputView = {
  // printMap(nextStep, correctBridge) {
  //   return PlayersMap.answerDivision(nextStep, correctBridge);
  // },

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
    Console.print(OUTPUT_MESSAGE.GAME_ATTEMPT + `${round}`);
  },
};

module.exports = OutputView;
