const { Console } = require('@woowacourse/mission-utils');
const { QUERY, BRIDGE } = require('./constants/constants');

const OutputView = {
  printStartMessage() {
    Console.print(QUERY.START);
  },
  printEndMessage() {
    Console.print(QUERY.END);
  },

  printMap(game) {
    Console.print(`[${game.generateMap(BRIDGE.UP_CHAR)}]`);
    Console.print(`[${game.generateMap(BRIDGE.DOWN_CHAR)}]`);
  },
  printResult(game) {},
};

module.exports = OutputView;
