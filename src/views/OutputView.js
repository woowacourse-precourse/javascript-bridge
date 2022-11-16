const Console = require('../utils/Console');
const { MESSAGE_GAME } = require('../constants/messages');

const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE_GAME.START);
  },

  printMap() {},

  printResult() {},
};

module.exports = OutputView;
