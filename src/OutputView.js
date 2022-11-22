const { Console } = require('@woowacourse/mission-utils');
const { GAME } = require('./phrases');

const OutputView = {
  printStart() {
    Console.print(GAME.START);
  },

  printMap([upperMap, lowerMap]) {
    Console.print(upperMap);
    Console.print(lowerMap);
  },

  printResultPhrase() {
    Console.print(GAME.RESULT);
  },

  printResult(isSucced, count) {
    const result = isSucced ? GAME.SUCCESS : GAME.FAILURE;
    Console.print(GAME.SUCCESS_OR_FAILURE + result);
    Console.print(GAME.TOTAL_ATTEMPTS + count);
  },
};

module.exports = OutputView;
