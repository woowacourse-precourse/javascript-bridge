const MissionUtils = require("@woowacourse/mission-utils");
const ErrorHandler = require('./ErrorHandler');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let result = this.inputValue("다리의 길이를 입력해주세요.");
    ErrorHandler.isBridgeSizeCorrect(result);

    return result;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let result = this.inputValue("이동할 칸을 선택해주세요. (위: U, 아래: D)");
    // ErrorHandler.isStringCorrect(result);

    return result;
  },

  readGameCommand() {
    let result = this.inputValue("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)");
    ErrorHandler.isRetryCorrect(result);

    return result;
  },

  inputValue(text) {
    let result;
    MissionUtils.Console.readLine(text, (input) => {
      result = input;
    })

    return result;
  }
};

module.exports = InputView;
