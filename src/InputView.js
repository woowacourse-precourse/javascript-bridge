const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  bridgeValidate(input) {
    const regExp = /\D/g;

    if (regExp.test(input)) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.\n");
    }
    if (parseInt(input) < 3 || parseInt(input) > 20) {
      throw new Error("[ERROR] 3이상 20이하의 숫자만 입력할 수 있습니다.\n");
    }
  },

  readBridgeSize(gameData) {
    try {
      MissionUtils.Console.readLine(
        "다리의 길이를 입력해주세요.\n",
        (input) => {
          this.bridgeValidate(input);
          gameData = new BridgeGame(parseInt(input));
          this.readMoving(gameData);
        }
      );
    } catch (e) {
      MissionUtils.Console.print(e);
      this.readBridgeSize(gameData);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(gameData) {
    try {
      MissionUtils.Console.readLine(
        "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
        (input) => {
          if (input !== "U" && input !== "D") {
            throw new Error("[ERROR] U 또는 D만 입력할 수 있습니다.\n");
          }
          gameData.move(input);
          OutputView.printMap(gameData);
          if (gameData.state == -1) {
            this.readGameCommand(gameData);
          } else if (gameData.state == 1) {
            OutputView.printResult(gameData);
            MissionUtils.Console.close();
          } else {
            this.readMoving(gameData);
          }
        }
      );
    } catch (e) {
      MissionUtils.Console.print(e);
      this.readMoving(gameData);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(gameData) {
    try {
      MissionUtils.Console.readLine(
        "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
        (input) => {
          if (input !== "Q" && input !== "R")
            throw new Error("[ERROR] Q 또는 R만 입력할 수 있습니다.");
          if (input === "Q") {
            OutputView.printResult(gameData);
            MissionUtils.Console.close();
          } else if (input === "R") {
            gameData.retry();
            this.readMoving(gameData);
          }
        }
      );
    } catch (e) {
      MissionUtils.Console.print(e);
      this.readGameCommand(gameData);
    }
  },
};

module.exports = InputView;
