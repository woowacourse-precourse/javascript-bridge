const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../constants/inputMessage");

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.READ_BRIDGE_SIZE,callback);
  },

  readMoving(callback) {
    Console.readLine(INPUT_MESSAGE.READ_MOVING,callback);
  },

  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.READ_GAME_COMMAND,callback);
  },
};

module.exports = InputView;
