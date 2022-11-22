const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../util/Constant');

const InputView = {
  readBridgeSize(callback) {
    Console.print(MESSAGE.START_GAME);
    Console.readLine(MESSAGE.INPUT_BRIDGE_SIZE, callback);
  },

  readMoving(callback) {
    Console.readLine(MESSAGE.UPDOWN, callback);
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.RETRY_QUIT, callback);
  },
};

module.exports = InputView;
