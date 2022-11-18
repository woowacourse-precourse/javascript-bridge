const Console = require('../utils/Console');
const { MESSAGE_GAME, MESSAGE_RESULT } = require('../constants/messages');

const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE_GAME.START);
  },

  printMap(map) {
    Console.print(map);
  },

  printResult(result, { successOrFailure, tryCount }) {
    Console.print(`${MESSAGE_RESULT.HEAD}\n`);
    Console.print(result);
    Console.print(`${MESSAGE_RESULT.SUCCESS_OR_FAILURE} ${successOrFailure}\n`);
    Console.print(`${MESSAGE_RESULT.TRY_COUNT} ${tryCount}`);
  },
};

module.exports = OutputView;
