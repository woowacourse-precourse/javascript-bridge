const Console = require('../utils/Console');
const { MESSAGE_GAME } = require('../constants/messages');

const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE_GAME.START);
  },

  printMap(map) {
    Console.print(map);
  },

  printResult() {},
};

module.exports = OutputView;
