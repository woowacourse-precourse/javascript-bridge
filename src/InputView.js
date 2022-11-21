const { Console } = require('@woowacourse/mission-utils');
const {
  BRIDGE_SIZE_REQUEST,
  MOVE_REQUEST,
  RETRY_REQUEST,
} = require('./constants');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(BRIDGE_SIZE_REQUEST, callback);
  },

  readMoving(callback) {
    Console.readLine(MOVE_REQUEST, callback);
  },

  readGameCommand(callback) {
    Console.readLine(RETRY_REQUEST, callback);
  },
};

module.exports = InputView;
