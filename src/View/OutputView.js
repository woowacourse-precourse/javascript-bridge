const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE, RESULT_MESSAGE } = require('../Constants/message');

const OutputView = {
  printStartMessage() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printMap({ upperBridge, downerBridge }) {
    Console.print(upperBridge);
    Console.print(downerBridge);
    Console.print(OUTPUT_MESSAGE.new_line);
  },

  printResult(game, map) {
    Console.print(OUTPUT_MESSAGE.result);
    OutputView.printMap(map);
    Console.print(RESULT_MESSAGE.result(game.getGameResult()));
    Console.print(RESULT_MESSAGE.attempt_count(game.getRetryCount()));
  },
};

module.exports = OutputView;
