const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant/index');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.ASK_BRIDGE_SIZE, callback);
  },

  readMoving(callback) {
    Console.readLine(MESSAGE.ASK_SELECT_MOVE_POINT, callback);
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.ASK_RETRY, callback);
  },
};

module.exports = InputView;
