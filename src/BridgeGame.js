const MissionUtils = require("@woowacourse/mission-utils");
const ContinueGame = require("./ContinueGame");
// const BridgeGame = require("./BridgeGame");
const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridgeArray;
  userInput;
  try = 0;
  upBridge = "";
  downBridge = "";
  ox;

  constructor(bridgeArray) {
    this.bridgeArray = bridgeArray;
    MissionUtils.Console.print(`: ${bridgeArray}`);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move(app, input) {
    this.bridgeArray[this.try] == input ? (this.ox = "O") : (this.ox = "X");
    if (input == "U") {
      this.upBridge += `${this.ox}`;
      this.downBridge += ` `;
    } else {
      this.upBridge += ` `;
      this.downBridge += `${this.ox}`;
    }
    app.printBridge(this.ox, this.upBridge, this.downBridge);
  }
  // ContinueGame.gameContinueCheck(this.upBridge, this.downBridge, bridgeArray);
  // OutputView.printMap(this.upBridge, this.downBridge, bridgeArray);
  // MissionUtils.Console.print(`[ ${this.upBridge} ]\n[ ${this.downBridge} ]`);

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {}
}

module.exports = BridgeGame;
