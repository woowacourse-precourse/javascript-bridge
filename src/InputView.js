const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let size;
    try {
      MissionUtils.Console.readLine("다리의 길이를 입력해주세요.", (answer) => {
        size = answer;
        this.validateSize(answer);
      });
    } catch (e) {
      MissionUtils.Console.print(e.message);
      return "err";
    }
    return size;
  },

  validateSize(size) {
    if (isNaN(Number(size))) throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    if (size < 3 || 20 < size)
      throw new Error("[ERROR] 3이상 20이하의 size를 입력해야 합니다.");
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moving;
    try {
      MissionUtils.Console.readLine(
        "이동할 칸을 선택해주세요. (위: U, 아래: D)",
        (answer) => {
          moving = this.validateMoving(answer);
        }
      );
    } catch (e) {
      MissionUtils.Console.print(e.message);
      return "err";
    }
    return moving;
  },

  validateMoving(moving) {
    if (moving !== "U" && moving !== "D")
      throw new Error("[ERROR] U나 D를 입력해야 합니다.");
    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let command;
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
      (answer) => {
        command = answer;
      }
    );
    return command;
  },
};

module.exports = InputView;
