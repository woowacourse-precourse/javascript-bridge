const { Console } = require('@woowacourse/mission-utils');
const { NOTICE } = require('./constants/Message');

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
    Console.print(`[ ${resultArray.join(' | ')} ]`);
  },

  printResult() {},
};

module.exports = OutputView;
