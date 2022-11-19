const { INPUT_MESSAGES } = require('../constants/messages');
const { readLine } = require('../utils/missionUtil');

const InputView = {
  readBridgeSize(callback) {
    const { bridgeSize } = INPUT_MESSAGES;
    readLine(bridgeSize, callback);
  },

  readMoving(callback) {
    const { moveSpace } = INPUT_MESSAGES;
    readLine(moveSpace, callback);
  },

  readGameCommand(callback) {
    const { gameOver } = INPUT_MESSAGES;
    readLine(gameOver, callback);
  },
};

module.exports = InputView;
