const MissionUtils = require("@woowacourse/mission-utils");
const { QUESTION } = require("../constants/constants");
const Validation = require("../Utils/Validation");
/**
 * 파일 경로 변경 가능 / 메서드 인자 변경 가능 / 필요 메서드 추가 가능
 */

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    try {
      let length;
      MissionUtils.Console.readLine(QUESTION.BRIDGE_SIZE, (input) => {
        length = parseInt(Validation.validSize(input));
      });
      return length;
    } catch (e) {
      MissionUtils.Console.print(e);
      this.readBridgeSize();
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    try {
      let move;
      MissionUtils.Console.readLine(QUESTION.MOVE_KEY, (input) => {
        Validation.validMoveKey(input);
        move = input;
      });
      return move;
    } catch (e) {
      MissionUtils.Console.print(e);
      this.readMoving();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    try {
      let command;
      MissionUtils.Console.readLine(QUESTION.COMMAND_KEY, (input) => {
        Validation.validCommandKey(input);
        command = input;
      });
      return command;
    } catch (e) {
      MissionUtils.Console.print(e);
      this.readGameCommand();
    }
  },
};

module.exports = InputView;
