const { Console } = require("@woowacourse/mission-utils");
const {
  INPUT_VIEW_COMMENT: { INPUT_BRIDGE_SIZE, INPUT_DIRECTION, INPUT_COMMAND },
} = require("./utils/constant");

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(INPUT_BRIDGE_SIZE, callback);
  },

  readMoving(callback) {
    Console.readLine(INPUT_DIRECTION, callback);
  },

  readGameCommand(callback) {
    Console.readLine(INPUT_COMMAND, callback);
  },
};

module.exports = InputView;
