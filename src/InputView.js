const MissionUtils = require("@woowacourse/mission-utils");

/*
  * 사용자로부터 입력을 받는 역할을 한다.
    제공된 InputView 객체를 활용해 구현해야 한다.
    InputView의 파일 경로는 변경할 수 있다.
    InputView의 메서드의 인자는 변경할 수 있다.
    사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeSize = 0;

    MissionUtils.Console.readLine(
      "다리의 길이를 입력해주세요. \n >",
      answer => bridgeSize = Number(answer)
    )
    this.validBrideSize(bridgeSize);

    return bridgeSize;
  },

  validBrideSize(bridgeSize) {
    if (bridgeSize < 3 || bridgeSize > 20) {
      throw `[ERROR] 다리의 길이는 3이상 20이하여야 합니다.`;
    }

    if (isNaN(bridgeSize)) {
      throw `[ERROR] 다리의 길이를 숫자로 입력해주세요.`;
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moving = '';

    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요 \n >",
      answer => moving = answer
    )

    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
