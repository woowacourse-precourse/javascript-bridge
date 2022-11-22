const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, RESULT } = require('../utils/constants');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.START);
    Console.print(MESSAGE.BLANK);
  },

  printMap(progressMap) {
    Console.print(progressMap.up);
    Console.print(progressMap.down);
    Console.print(MESSAGE.BLANK);
  },

  printResult(progressMap, gameResultData) {
    const { playCount, gameResult } = gameResultData;
    Console.print(RESULT.TITLE);
    this.printMap(progressMap);
    Console.print(RESULT.GAME_RESULT(gameResult));
    Console.print(RESULT.PLAY_COUNT(playCount));
    Console.close();
  },

  printError(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
