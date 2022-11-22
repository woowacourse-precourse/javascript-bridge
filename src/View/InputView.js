const { MESSAGE } = require('../Utils/Constants.js');
const { playerInput } = require('../Utils/ConsoleUtils.js');

const InputView = {
  readBridgeSize(callback) {
    playerInput(MESSAGE.INPUT_SIZE, callback);
  },

  readMoving(callback) {
    playerInput(MESSAGE.INPUT_DIRECTION, callback);
  },

  readGameCommand(callback) {
    playerInput(MESSAGE.INPUT_COMMAND, callback);
  },
};

module.exports = InputView;
