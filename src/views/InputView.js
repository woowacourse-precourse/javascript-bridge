const Console = require('../utils/Console');
const { MESSAGE_QUESTION } = require('../constants/messages');

const InputView = {
  readBridgeSize(initialize) {
    Console.readLine(MESSAGE_QUESTION.BRIDGE_SIZE, initialize);
  },

  readMoving(movePlayer) {
    Console.readLine(MESSAGE_QUESTION.PLAYER_MOVING, movePlayer);
  },

  readGameCommand(startOrQuit) {
    Console.readLine(MESSAGE_QUESTION.RESTART_OR_QUIT, startOrQuit);
  },
};

module.exports = InputView;
