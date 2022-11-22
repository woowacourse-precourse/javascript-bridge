const { input } = require('../utils/utils');
const { MESSAGE } = require('../utils/constants');

const InputView = {
  readBridgeSize(callback) {
    input(MESSAGE.inputBridgeSize, callback);
  },

  readMoving(callback) {
    input(MESSAGE.inputDirectionToMove, callback);
  },

  readGameCommand(callback) {
    input(MESSAGE.inputGameCommand, callback);
  },
};

module.exports = InputView;
