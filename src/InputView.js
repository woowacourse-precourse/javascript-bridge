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
    if (!this.isInteger(number)) {
      throw new Error("[ERROR] 정수 숫자");
    }
    if (!this.isBetweenThreeTwenty(number)) {
      throw new Error("[ERROR] 3~20 숫자");
    }
  },

  readBridgeSize(bridge, bridgeGame) {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (size) => {
      this.checkBridgeSize(size);
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
    if (!(string === "U" || string === "D")) {
      throw new Error("[ERROR] U나 D");
    }
  },

  readMoving(bridge, bridgeGame) {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (movement) => {
        this.checkMovement(movement);
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
    if (!(string === "R" || string === "Q")) {
      throw new Error("[ERROR] R이나 Q");
    }
  },

  readGameCommand(bridge, bridgeGame) {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (restart) => {
        this.checkRestart(restart);
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
