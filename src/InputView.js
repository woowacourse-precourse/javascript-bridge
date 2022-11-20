const MissionUtils = require("@woowacourse/mission-utils");
const BridgeError = require("./BridgeError");
const BridgeMaker = require("./BridgeMaker");
const RandomNumber = require("./BridgeRandomNumberGenerator");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  bridgeGameCourse() {
    this.readBridgeSize();
    this.readMoving();
  },

  readBridgeSize() {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.", (input) => {
      try {new BridgeError(+input)} catch (errorMSG) {MissionUtils.Console.print(errorMSG); this.readBridgeSize();};
      BridgeMaker.makeBridge(+input, RandomNumber.generate)
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)", (input) => {
      MissionUtils.Console.print(input);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
