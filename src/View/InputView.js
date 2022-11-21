const { MESSAGE } = require('../Utils/Constants.js');
const { playerInput } = require('../Utils/ConsoleUtils.js');

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
