const { MESSAGE } = require('../Constants.js');
const { playerInput, printMessage, close } = require('../Utils.js');

const InputView = {
  readBridgeSize(callback) {
    playerInput(MESSAGE.INPUT_SIZE, callback);
  },

  readMoving(callback) {
    playerInput(MESSAGE.INPUT_SPACE_TO_MOVE, callback);
  },

  readGameCommand(callback) {
    playerInput(MESSAGE.INPUT_WANT_RETRY, callback);
  },
};

module.exports = InputView;
