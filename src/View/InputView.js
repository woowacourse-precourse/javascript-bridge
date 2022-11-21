const { Console } = require('@woowacourse/mission-utils');
const SYSTEM_MESSAGE = require('../../constants/system message');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(SYSTEM_MESSAGE.INPUT_SIZE, callback);
  },

  readMoving(callback) {
    Console.readLine(SYSTEM_MESSAGE.INPUT_MOVE, callback);
  },

  readGameCommand(callback) {
    Console.readLine(SYSTEM_MESSAGE.RESTART, callback);
  },
};

module.exports = InputView;
