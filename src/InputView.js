const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE_INPUT } = require('./utils/constant');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE_INPUT.BRIDGE_SIZE, callback);
  },

  readMoving(callback) {
    Console.readLine(MESSAGE_INPUT.MOVING, callback);
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE_INPUT.GAME_COMMAND, callback);
  },
};

module.exports = InputView;
