const { Console } = require('@woowacourse/mission-utils');
const { QUERY, BRIDGE } = require('./constants/constants');

const OutputView = {
  printStartMessage() {
    Console.print(QUERY.START);
  },
  printEndMessage() {
    Console.print(QUERY.END);
  },
  printError(err) {
    Console.print(err);
  },
  printMap(game) {
    Console.print(`[${game.generateMap(BRIDGE.UP_CHAR)}]`);
    Console.print(`[${game.generateMap(BRIDGE.DOWN_CHAR)}]`);
  },
  printResult(game) {
    this.printEndMessage();
    this.printMap(game);

    const [isSuccess, trial] = game.result();
    Console.print(`${QUERY.RESULT}: ${isSuccess}`);
    Console.print(`${QUERY.TRIAL}: ${trial}`);
  },
};

module.exports = OutputView;
