const { Console } = require('@woowacourse/mission-utils');
const { REQUEST_MESSAGE } = require('../utils/message');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(REQUEST_MESSAGE.size, callback);
  },

  readMoving(callback) {
    Console.readLine(REQUEST_MESSAGE.direction, callback);
  },

  readGameCommand(callback) {
    Console.readLine(REQUEST_MESSAGE.retryOrQuit, callback);
  },
};
module.exports = InputView;
