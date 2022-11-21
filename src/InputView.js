const MissionUtils = require("@woowacourse/mission-utils");
const { InputMessage } = require("./constant/Constants");

const InputView = {
  readBridgeSize(callBack) {
    MissionUtils.Console.readLine(InputMessage.BRIDGE_SIZE, callBack);
  },

  readMoving(callBack) {
    MissionUtils.Console.readLine(InputMessage.MOVING_DIRECTION, callBack);
  },

  readGameCommand(callBack) {
    MissionUtils.Console.readLine(InputMessage.RETRY_OR_QUIT, callBack);
  },
};

module.exports = InputView;
