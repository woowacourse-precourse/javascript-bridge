/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const MissionUtils = require("@woowacourse/mission-utils");
const Checking = require("./Checking")

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let BRIDGE_LENGTH = 0
    MissionUtils.Console.readLine("",(bridgeLength) => {
      // 유효성 검사 필요 : bridgeLength 가 숫자가 아닌 경우
      Checking.bridgeNum(bridgeLength)
      Checking.bridgeNumCheck(bridgeLength)
      BRIDGE_LENGTH = bridgeLength
    })
    return BRIDGE_LENGTH
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
