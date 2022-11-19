const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utiles/Constant');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.BRIDGE_SIZE, callback);
  },

  lineInterval() {
    Console.print('');
  },
  
  readMoving(callback) {
    Console.readLine(MESSAGE.CHOOSE_UPDOWN, callback);
  },
  
  readGameCommand(callback) {
    Console.readLine(MESSAGE.CHOOSE_RETRY, callback);
  },
};

module.exports = InputView;
