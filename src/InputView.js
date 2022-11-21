const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constant/Bridge');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.INPUT_BRIDGE_SIZE, callback);
  },

  readMoving(callback) {
    Console.readLine(MESSAGE.INPUT_SPACE, callback);
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.INPUT_COMMAND, callback);
  }
};

module.exports = InputView;
