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

  printResult() {},
};

module.exports = OutputView;
