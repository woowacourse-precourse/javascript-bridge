const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constants/constants");

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.readBridgeSize, callback);
  },

  readMoving(callback) {
    Console.readLine(MESSAGE.readMoving, callback);
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.readGameCommand, callback);
  },
};

module.exports = InputView;
