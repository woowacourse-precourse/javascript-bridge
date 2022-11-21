const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  bridgeSize: 0,
  moving: "",
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (answer) => {
      try {
        this.validateBridgeSize(answer);
      } catch (error) {
        MissionUtils.Console.print(error);
        this.readBridgeSize();
      }
      this.bridgeSize = answer;
    });
  },

  validateBridgeSize(size) {
    if (size < 3 || size > 20)
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (answer) => {
        try {
          this.validateMoving(answer);
        } catch (error) {
          MissionUtils.Console.print(error);
          this.readMoving();
        }
        this.moving = answer;
      }
    );
  },

  validateMoving(moving) {
    if (moving !== "U" || moving !== "D")
      throw new Error("[ERROR] 이동할 칸은 U 혹은 D 여야 합니다.");
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
