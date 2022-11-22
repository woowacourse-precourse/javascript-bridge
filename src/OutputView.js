const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');

const OutputView = {
  map: '',

  printStartMessage() {
    Console.print(MESSAGE.GAME_START);
  },

  printMap(map) {
    this.map = map;
    Console.print(map);
  },

  printResult(gameResult, attemptsNum) {
    Console.print(MESSAGE.GAME_RESULT);
    Console.print(this.map);
    Console.print(MESSAGE.SUCCESS_OR_FAIL(gameResult));
    Console.print(MESSAGE.ATTEMPTS_NUM(attemptsNum));
  },
};

module.exports = OutputView;
