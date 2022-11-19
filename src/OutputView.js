const { Console } = require('@woowacourse/mission-utils');
const { NOTICE, RESULT } = require('./constants/Message');

const OutputView = {
  printGameStart() {
    Console.print(NOTICE.GAME_START);
  },

  printMap(resultArrays) {
    const { upper, lower } = resultArrays;
    OutputView.printSingleMap(upper);
    OutputView.printSingleMap(lower);
    Console.print('');
  },

  printSingleMap(resultArray) {
    Console.print(
      `${RESULT.OPEN_BRACKET} ${resultArray.join(RESULT.SEPARATOR)} ${
        RESULT.CLOSING_BRACKET
      }`
    );
  },

  printResult(game) {
    Console.print(NOTICE.FINAL_RESULT);
    OutputView.printMap(game.getResultArray());
    Console.print(
      `${NOTICE.GAME_SUCCESS}${
        game.isFailed() ? RESULT.FAILURE : RESULT.SUCCESS
      }`
    );
    Console.print(`${NOTICE.TOTAL_ATTEMPT}${game.getAttempts()}`);
    Console.close();
  },
};

module.exports = OutputView;
