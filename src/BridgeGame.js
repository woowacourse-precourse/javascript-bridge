const MissionUtils = require("@woowacourse/mission-utils");
const ContinueGame = require("./ContinueGame");
const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridgeArray;
  upBridge = "";
  downBridge = "";
  ox;

  constructor(bridgeArray) {
    this.bridgeArray = bridgeArray;
    MissionUtils.Console.print(`: ${this.bridgeArray}`);
  }

  compare(input, userTry) {
    if (this.bridgeArray[userTry] == input) this.ox = "O";
    else this.ox = "X";
    MissionUtils.Console.print(userTry);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move(app, input, userTry) {
    this.compare(input, userTry);
    if (input == "U") {
      this.upBridge += `${this.ox}`;
      this.downBridge += ` `;
    } else if (input == "D") {
      this.upBridge += ` `;
      this.downBridge += `${this.ox}`;
    }
    app.printBridge(this.ox, this.upBridge, this.downBridge);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {}
}

module.exports = BridgeGame;
