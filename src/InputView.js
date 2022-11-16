const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation");

const InputView = {
  START_MSG: "다리 건너기 게임을 시작합니다.",
  READ_BRIDGE_SIZE_MSG: "다리의 길이를 입력해주세요.",

  readBridgeSize() {
    MissionUtils.Console.readLine(
      InputView.START_MSG + "\n" + InputView.READ_BRIDGE_SIZE_MSG,
      (bridgeSize) => {
        Validation.validateBridgeSize(bridgeSize);
      }
    );
  },

  readMoving() {},

  readGameCommand() {},
};

module.exports = InputView;
