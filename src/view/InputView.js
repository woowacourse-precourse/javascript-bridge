const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../utils/gameMessage');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.GET_BRIDGE_LENGTH, callback);
  },

  readMoving(callback) {
    Console.readLine(INPUT_MESSAGE.SELECT_MOVE, callback);
  },

  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.SELECT_RETRY, callback);
  },
};

module.exports = InputView;
