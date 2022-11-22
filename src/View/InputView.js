const { Console } = require("@woowacourse/mission-utils");
const { GAME_MSG } = require("../constants/message");

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(GAME_MSG.BRIDGE_SIZE, callback);
  },

  readMoving(callback) {
    Console.readLine(GAME_MSG.DIRECTION, callback);
  },

  readGameCommand(callback) {
    Console.readLine(GAME_MSG.RETRY, callback);
  },
};

module.exports = InputView;
