const MissionUtils = require("@woowacourse/mission-utils");
const Constants = require("./Constants");
const Validator = require("./Validator");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  getBridgeLength(constants) {
    let bridgeLength;
    MissionUtils.Console.readLine(constants, (userinput) => {
      bridgeLength = userinput;
    });
    return bridgeLength;
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let userInput = InputView.getBridgeLength(Constants.ASK_BRIDGE_LENGTH);
    Validator.validbridgeLength(userInput);
    return userInput;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
