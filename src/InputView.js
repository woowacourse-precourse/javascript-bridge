const { Console } = require('@woowacourse/mission-utils');
const { REQUEST } = require('./constants');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(REQUEST.BRIDGE_SIZE_REQUEST, callback);
  },

  readMoving(callback) {
    Console.readLine(REQUEST.MOVE_REQUEST, callback);
  },

  readGameCommand(callback) {
    Console.readLine(REQUEST.RETRY_REQUEST, callback);
  },
};

module.exports = InputView;
