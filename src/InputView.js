const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    const bridgeSize = this.input('다리의 길이를 입력해주세요.\n');
    const exceptionResult = this.bridgeSizeException(bridgeSize);
    return {status: exceptionResult, data: bridgeSize};
  },

  bridgeSizeException(bridgeSize) {
    const regex = /^[0-9]+$/;
    if (regex.test(bridgeSize) && bridgeSize >= 3 && bridgeSize <= 20) {
      return true;
    }
    else if (bridgeSize === undefined) {
      return false;
    }
    throw new Error("[ERROR] 유효하지 않은 입력값입니다.");
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    const moving = this.input(`이동할 칸을 선택해주세요. (위: U, 아래: D)\n`)
    const exceptionResult = this.movingException(moving);
    return {status: exceptionResult, data: moving};
  },

  movingException(moving) {
    if (moving === 'U' || moving === 'D') {
      return true;
    }
    return false;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    const command = this.input('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n');
    const exceptionResult = this.commandException(command);
    return {status: exceptionResult, data: command};
  },

  commandException(command) {
    if (command === 'R' || command === 'Q') {
      return true;
    }
    return false;
  },

  input(text) {
    let result;
    MissionUtils.Console.readLine(text, (answer) => {
      result = answer;
    });
    return result;
  }
};

module.exports = InputView;
