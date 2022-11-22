const MissionUtils = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../constants/messages");
const { Console } = MissionUtils;

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.BRIDGE_LENGT, callback);
  },

  readMoving(callback) {
    Console.readLine(INPUT_MESSAGE.MOVE_BRIDGE, callback);
  },

  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.ASK_RETRY, callback);
  },
};

module.exports = InputView;
