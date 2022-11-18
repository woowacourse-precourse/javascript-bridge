const Console = require('../utils/Console');
const { MESSAGE_QUESTION } = require('../constants/messages');

const InputView = {
  readBridgeSize(initializeGame) {
    Console.readLine(MESSAGE_QUESTION.BRIDGE_SIZE, initializeGame);
  },

  readMoving(movePlayer) {
    Console.readLine(MESSAGE_QUESTION.PLAYER_MOVING, movePlayer);
  },

  readGameCommand(restartOrQuitGame) {
    Console.readLine(MESSAGE_QUESTION.RESTART_OR_QUIT, restartOrQuitGame);
  },
};

module.exports = InputView;
