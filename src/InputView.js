const MissionUtils = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("./constant/Constant");

const InputView = {
  readBridgeSize(getBridgeSize) {
    MissionUtils.Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, getBridgeSize);
  },

  readMoving(getMoving) {
    MissionUtils.Console.readLine(INPUT_MESSAGE.MOVING, getMoving);
  },

  readGameCommand(getGameCommand) {
    MissionUtils.Console.readLine(INPUT_MESSAGE.GAME_COMMAND, getGameCommand);
  },
};

module.exports = InputView;
