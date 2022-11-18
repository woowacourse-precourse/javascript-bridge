const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printMap() {},

  printResult() {},

  printMsg(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
