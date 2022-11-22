const { Console } = require('@woowacourse/mission-utils');
const { command } = require('./utils/message');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(command.GET_BRIDGE_SIZE, callback);
  },

  readMoving(callback) {
    Console.readLine(command.MOVE, callback);
  },

  readGameCommand(callback) {
    Console.readLine(command.RETRY, callback);
  },
};

module.exports = InputView;
