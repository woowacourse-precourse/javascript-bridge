const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n', (inputBridgeSize) => {
      try {
        Validation.checkBridgeSize(inputBridgeSize);
      } catch (Error) {
        MissionUtils.Console.print(`${Error.message} \n`);
        return this.readBridgeSize(callback);
      }
      callback(inputBridgeSize);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (inputMoving) => {
      try {
        Validation.checkMoving(inputMoving);
      } catch (Error) {
        MissionUtils.Console.print(`${Error.message} \n`);
        return this.readMoving(callback);
      }
      callback(inputMoving);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
