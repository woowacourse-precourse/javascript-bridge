const { Console } = require('@woowacourse/mission-utils');
const { GAME_MSG } = require('./constants/message.js');

const OutputView = {
  printStartMsg() {
    Console.print(GAME_MSG.start);
  },

  printMap() {},

  printResult() {},
};

module.exports = OutputView;
