const MissionUtils = require("@woowacourse/mission-utils");

const { MANAGER } = require("../utils/gameMessage");

const InputView = {
  readBridgeSize(input) {
    MissionUtils.Console.readLine(`${MANAGER.ASK_BRIDGE_SIZE}`, input);
  },

  readMoving(input) {
    MissionUtils.Console.readLine(`${MANAGER.ASK_MOVE}`, input);
  },

  readGameCommand(input) {
    MissionUtils.Console.readLine(`${MANAGER.ASK_RETRY}`, input);
  },
};

module.exports = InputView;
