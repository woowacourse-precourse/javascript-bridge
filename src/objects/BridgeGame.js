const BridgeRandomNumberGenerator = require("../utils/BridgeRandomNumberGenerator");
const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("../views/OutputView");
const InputView = require("../views/InputView");
const { makeBridge } = require("../BridgeMaker");

const User = require("./User");

class BridgeGame {
  #bridge;
  #playCount;
  #userBridge;
  constructor(bridge) {
    this.#bridge = bridge;
    this.#userBridge = new User();
    this.#playCount = 1;
  }
  mapBridge() {
    return this.#userBridge.mapBridge();
  }
  mapErrorBridge(bridge) {
    return this.#userBridge.mapErrorBridge(bridge);
  }
  move(direction) {
    this.#userBridge.move(direction, this.#bridge);
  }
  requestRetry() {
    InputView.readGameCommand(this.retryOrQuit.bind(this));
  }
  isCorrectDirection(direction) {
    return this.#userBridge.isCorrectDirection(direction, this.#bridge);
  }
  retryOrQuit(command) {
    if (command === "R") {
      this.#userBridge = [];
      this.#playCount += 1;
      this.requestMove();
    }
    if (command === "Q") {
      this.loseGame(false);
    }
  }
  winGame(result) {
    OutputView.printResult(
      this.mapBridge(this.#userBridge),
      this.#playCount,
      result
    );
  }
  loseGame(result) {
    OutputView.printResult(
      this.mapErrorBridge(this.#userBridge),
      this.#playCount,
      result
    );
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  retry() {}
}

module.exports = BridgeGame;
