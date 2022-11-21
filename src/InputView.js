const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, WORD } = require("./Constants");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(MESSAGE.INPUT.BRIDGE_SIZE, (answer) => {
      console.log(answer);
      this.validateBridgeSize(answer);
    });
  },
  /**
   * + 입력 받은 다리 길이를 검증한다.
   */
  validateBridgeSize(bridgeSize) {
    try {
      if (WORD.START_SIZE <= bridgeSize && bridgeSize <= WORD.END_SIZE) {
        return bridgeSize;
      }
      throw MESSAGE.ERROR.BRIDGE_SIZE;
    } catch (error) {
      console.error(error);
      this.readBridgeSize();
    }
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
