const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeLength) {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.", bridgeLength);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moving;
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)",
      (userInput) => {
        this.validateMoving(userInput);
        if (userInput != "U" && userInput != "D") {
          MissionUtils.Console.close();
          throw new Error("[ERROR] U와 D 중 하나의 문자를 입력하세요.");
        }
        moving = userInput;
      }
    );
    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let gameCommand;
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
      (userInput) => {
        this.validateGameCommand(userInput);
        gameCommand = userInput;
      }
    );
    return gameCommand;
  },

  validateMoving(userInput) {
    if (userInput != "U" && userInput != "D") {
      MissionUtils.Console.close();
      throw new Error("[ERROR] U와 D 중 하나의 문자를 입력하세요.");
    }
  },

  validateGameCommand(userInput) {
    if (userInput !== "R" && userInput !== "Q") {
      MissionUtils.Console.close();
      throw new Error("[ERROR] R와 Q 중 하나의 문자를 입력하세요.");
    }
  },
};

module.exports = InputView;
