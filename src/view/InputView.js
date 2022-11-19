const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant/Constant');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.ASK_BRIDGE_LENGTH, callback);
  },

  readMoving(callback) {
    Console.readLine(MESSAGE.ASK_SELECT_MOVE, callback);
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.ASK_RETRY, callback);
  },
};

module.exports = InputView;
