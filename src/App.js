const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

class App {
  #bridgeGame;

  constructor() {
    this.bridge = [];
    this.currentBridge = [];
  }

  play() {
    this.startGame();
    Console.close();
  }

  startGame() {
    Console.print("다리 건너기 게임을 시작합니다.");
    this.bridge = InputView.readBridgeSize();
    this.#bridgeGame = new BridgeGame(this.bridge);
    this.moveBridge();
  }

  moveBridge() {
    this.currentBridge.push(InputView.readMoving());
    if (this.#bridgeGame.move(this.currentBridge)) {
      OutputView.printMap(this.currentBridge, "correct");
      this.checkFinish();
    } else if (!this.#bridgeGame.move(this.currentBridge)) {
      OutputView.printMap(this.currentBridge, "wrong");
      this.checkRetry();
    }
  }

  checkRetry() {
    let isRetry = InputView.readGameCommand();
    if (isRetry === "R") {
      this.#bridgeGame.retry();
      this.currentBridge = [];
      this.moveBridge();
    } else if (isRetry === "Q") {
      OutputView.printResult(this.currentBridge, "wrong", this.#bridgeGame.getAttemps());
    }
  }

  checkFinish() {
    if (this.bridge.length !== this.currentBridge.length) {
      this.moveBridge();
    } else if (this.bridge.length === this.currentBridge.length) {
      OutputView.printResult(this.currentBridge, "correct", this.#bridgeGame.getAttemps());
    }
  }
}

module.exports = App;
