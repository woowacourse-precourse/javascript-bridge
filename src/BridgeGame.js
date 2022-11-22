const BridgeRandomNumberGenerator = require("./utils/BridgeRandomNumberGenerator");
const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("./views/OutputView");
const InputView = require("./views/InputView");
const { makeBridge } = require("./BridgeMaker");
class BridgeGame {
  #bridge;
  #playCount;
  #userBridge;
  constructor() {
    this.#bridge = [];
    this.#userBridge = [];
    this.#playCount = 1;
  }
  play() {
    OutputView.printMessage("다리 건너기 게임을 시작합니다.\n");
    this.requestSize();
  }
  requestSize() {
    InputView.readBridgeSize(this.createBridge.bind(this));
  }
  createBridge(size) {
    this.#bridge = makeBridge(
      Number(size),
      BridgeRandomNumberGenerator.generate
    );
    OutputView.lineBreak();
    this.requestMove();
  }
  makeTwoBridge(bridge) {
    const highBridge = bridge.map((direction) =>
      direction === "U" ? "O" : " "
    );
    const lowBridge = bridge.map((direction) =>
      direction === "D" ? "O" : " "
    );
    return [highBridge, lowBridge];
  }
  makeTwoErrorBridge(bridge) {
    const highBridge = bridge.map((direction, index) => {
      if (index === this.#userBridge.length - 1) {
        return direction === "U" ? "X" : " ";
      }
      return direction === "U" ? "O" : " ";
    });
    const lowBridge = bridge.map((direction, index) => {
      if (index === this.#userBridge.length - 1) {
        return direction === "D" ? "X" : " ";
      }
      return direction === "D" ? "O" : " ";
    });
    return [highBridge, lowBridge];
  }
  changeBridgeOutfit(highBridge, lowBridge) {
    const highBridgeOutfit = `[ ${highBridge.join(" | ")} ]`;
    const lowBridgeOutfit = `[ ${lowBridge.join(" | ")} ]`;
    return [highBridgeOutfit, lowBridgeOutfit];
  }
  mapBridge(bridge) {
    const [highBridge, lowBridge] = this.makeTwoBridge(bridge);
    return this.changeBridgeOutfit(highBridge, lowBridge);
  }
  mapErrorBridge(bridge) {
    const [highBridge, lowBridge] = this.makeTwoErrorBridge(bridge);
    return this.changeBridgeOutfit(highBridge, lowBridge);
  }
  requestMove() {
    InputView.readMoving(this.move.bind(this));
  }
  move(direction) {
    if (this.isCorrectDirection(direction)) {
      this.#userBridge.push(direction);
      OutputView.printMap(this.mapBridge(this.#userBridge));
      if (this.#userBridge.length === this.#bridge.length) {
        this.winGame(true);
        return;
      }
      this.requestMove();
      return;
    }
    this.#userBridge.push(direction);
    OutputView.printMap(this.mapErrorBridge(this.#userBridge));
    this.requestRetry();
  }

  isCorrectDirection(direction) {
    if (direction === this.#bridge[this.#userBridge.length]) {
      return true;
    }
    return false;
  }
  requestRetry() {
    InputView.readGameCommand(this.retryOrQuit.bind(this));
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
