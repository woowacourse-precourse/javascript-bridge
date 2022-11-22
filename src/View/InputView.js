const MissionUtils = require("@woowacourse/mission-utils");
const { INPUT } = require("../Utils/constants/MessageConstants");

const InputView = {
   readBridgeSize(inputBridgeSize) {
    MissionUtils.Console.readLine(INPUT.BRIDGE_SIZE, (inputBridgeSize));
  },

  readMoving(inputMoving) {
    MissionUtils.Console.readLine(INPUT.MOVING, (inputMoving));
  },

  readGameCommand(inputRetryOrEnd) {
    MissionUtils.Console.readLine(INPUT.RETRY_OR_END, (inputRetryOrEnd));
  },
};

module.exports = InputView;
