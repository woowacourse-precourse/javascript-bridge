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
    let length;
    MissionUtils.Console.readLine(QUESTION.BRIDGE_SIZE, (input) => {
      Validation.validSize(input);
      length = parseInt(input);
    });
    return length;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let move;
    MissionUtils.Console.readLine(QUESTION.MOVE_KEY, (input) => {
      Validation.validMoveKey(input);
      move = input;
    });
    return move;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let command;
    MissionUtils.Console.readLine(QUESTION.COMMAND_KEY, (input) => {
      Validation.validCommandKey(input);
      command = input;
    });
    return command;
  },
};

module.exports = InputView;
