const { Console } = require('@woowacourse/mission-utils');
const { QUERY, BRIDGE } = require('./constants/constants');

const OutputView = {
  printStartMessage() {
    Console.print(QUERY.START);
  },
  printEndMessage() {
    Console.print(QUERY.END);
  },

  printMap(game) {},
  printResult(game) {},
};

module.exports = OutputView;
