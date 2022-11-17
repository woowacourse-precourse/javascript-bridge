const MissionUtils = require("@woowacourse/mission-utils");
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
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.", (input) => {
      this.validSize(input);
      length = parseInt(input);
    });
    return length;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let move;
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)",
      (input) => {
        this.validMoveKey(input);
        move = input;
      }
    );
    return move;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let command;
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
      (input) => {
        this.validCommandKey(input);
        command = input;
      }
    );
    return command;
  },

  validSize(input) {
    if (isNaN(+input)) {
      throw new Error("[ERROR] 숫자만 입력해주세요");
    }
    if (!(input >= 3 && input <= 20)) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 다리의 길이는 3~20 사이여야 합니다.");
    }
  },

  validMoveKey(input) {
    if (input !== "U" && input !== "D") {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 이동할 칸은 U 혹은 D 중에 입력해야합니다.");
    }
  },

  validCommandKey(input) {
    if (input !== "R" && input !== "Q") {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 게임 진행은 R 혹은 Q 중에 입력해야합니다.");
    }
  },
};

module.exports = InputView;
