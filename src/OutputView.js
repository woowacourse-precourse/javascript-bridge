const { Console } = require('@woowacourse/mission-utils');
const { NOTICE } = require('./constants/Message');

const OutputView = {
  printGameStart() {
    Console.print(NOTICE.GAME_START);
  },

  printMap() {},

  printResult() {},
};

module.exports = OutputView;
