const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./Constants");
const InputValidator = require("./InputValidator");

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
      try {
        if (InputValidator.validateBridgeSize(answer) === answer) return answer;
        throw MESSAGE.ERROR.BRIDGE_SIZE;
      } catch (error) {
        console.error(error);
        this.readBridgeSize();
      }
    });
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
