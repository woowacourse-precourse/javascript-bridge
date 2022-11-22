const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Constants');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.SIZE_INPUT, callback);
  },

  readMoving(callback) {
    Console.readLine(MESSAGE.DIRECTION_INPUT, callback);
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.COMMAND_INPUT, callback);
  },
};

module.exports = InputView;

