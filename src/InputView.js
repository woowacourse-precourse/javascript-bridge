const MissionUtils = require("@woowacourse/mission-utils");

const Bridge = require("./Bridge");
const OutputView = require("./OutputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  isInteger(number) {
    return number % 1 === 0;
  },
  isBetweenThreeTwenty(number) {
    return number >= 3 && number <= 20;
  },
  checkBridgeSize(number) {
    try {
      if (!this.isInteger(number)) {
        throw new Error("[ERROR] 정수 숫자");
      }
      if (!this.isBetweenThreeTwenty(number)) {
        throw new Error("[ERROR] 3~20 숫자");
      }
    } catch {
      MissionUtils.Console.print("[ERROR]");
      return true;
    }
  },

  readBridgeSize(bridge, bridgeGame) {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (size) => {
      if (this.checkBridgeSize(size)) {
        return this.readBridgeSize(bridge, bridgeGame);
      }

      bridge.setBridge(size);
      console.log(bridge.getBridge());
      this.readMoving(bridge, bridgeGame);

      this.readGameCommand();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  checkMovement(string) {
    try {
      if (!(string === "U" || string === "D")) {
        throw new Error("[ERROR] U나 D");
      }
    } catch {
      MissionUtils.Console.print("[ERROR]");
      return true;
    }
  },

  readMoving(bridge, bridgeGame) {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (movement) => {
        if (this.checkMovement(movement)) {
          return this.readMoving(bridge, bridgeGame);
        }
        bridgeGame.move(movement, bridge);

        if (bridgeGame.getCross()) {
          if (bridgeGame.getSuccess()) {
            OutputView.printResult(bridgeGame);
          } else {
            this.readMoving(bridge, bridgeGame);
          }
        } else {
          this.readGameCommand(bridge, bridgeGame);
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */

  checkRestart(string) {
    try {
      if (!(string === "R" || string === "Q")) {
        throw new Error("[ERROR] R이나 Q");
      }
    } catch {
      MissionUtils.Console.print("[ERROR]");
      return true;
    }
  },

  readGameCommand(bridge, bridgeGame) {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (restart) => {
        if (this.checkRestart(restart)) {
          return this.readGameCommand(bridge, bridgeGame);
        }
        if (restart === "R") {
          bridgeGame.retry(restart);
          this.readMoving(bridge, bridgeGame);
        } else if (restart === "Q") {
          OutputView.printResult(bridgeGame);
        }
      }
    );
  },
};

module.exports = InputView;
