const { Console } = require("@woowacourse/mission-utils");
const { REQUEST } = require("./constants");

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(REQUEST.INPUT_BRIDGE_SIZE, callback);
  },

  readMoving(callback) {
    Console.readLine(REQUEST.INPUT_MOVE, callback);
  },

  readGameCommand(callback) {
    Console.readLine(REQUEST.INPUT_GAME_COMMAND, callback);
  },
};

module.exports = InputView;
