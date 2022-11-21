const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../utils/constants');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.enterBridgeSize, callback);
  },

  readMoving(callback) {
    Console.readLine(INPUT_MESSAGE.enterMoving, callback);
  },

  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.enterGameCommand, callback);
  },
};

module.exports = InputView;
