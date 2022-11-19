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
  },

  printSingleMap(resultArray) {
    Console.print(
      `${RESULT.OPEN_BRACKET} ${resultArray.join(RESULT.SEPARATOR)} ${
        RESULT.CLOSING_BRACKET
      }`
    );
  },

  printResult() {},
};

module.exports = OutputView;
