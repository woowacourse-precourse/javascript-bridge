const { Console } = require('@woowacourse/mission-utils');
const { REQUEST_MSG } = require('../constants/message.js');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(REQUEST_MSG.bridgeSize, callback);
  },

  readMoving(callback) {
    Console.readLine(REQUEST_MSG.direction, callback);
  },

  readGameCommand(callback) {
    Console.readLine(REQUEST_MSG.retryOrQuit, callback);
  },
};

module.exports = InputView;
