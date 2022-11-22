const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE_PROCESS } = require('./Constants');

const OutputView = {
  printError(error) {
    Console.print(error);
  },

  printStart() {
    Console.print(MESSAGE_PROCESS.GAME_START);
  },

  printMap(movings) {
    const moveUp = movings.moveUp;
    const moveDown = movings.moveDown;
    
    Console.print(MESSAGE_PROCESS.BRIDGE_STATE(moveUp));
    Console.print(MESSAGE_PROCESS.BRIDGE_STATE(moveDown));
  },

  printResult(gameResult) {
    Console.print(MESSAGE_PROCESS.GAME_QUIT);
    Console.print(MESSAGE_PROCESS.BRIDGE_STATE(gameResult.moveUp));
    Console.print(MESSAGE_PROCESS.BRIDGE_STATE(gameResult.moveDown));
    Console.print(MESSAGE_PROCESS.GAME_RESULT(gameResult.isSuccess));
    Console.print(MESSAGE_PROCESS.TRY_COUNT(gameResult.tryCount));
    Console.close();
  },
};

module.exports = OutputView;
