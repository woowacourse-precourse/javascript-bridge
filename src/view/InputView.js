const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../utils/constants");

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.LENGTH, callback);
  },

  readMoving(callback) {
    Console.readLine(INPUT_MESSAGE.MOVE, callback);
  },

  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.GAME_OVER, callback);
  },
};

module.exports = InputView;
