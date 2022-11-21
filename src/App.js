const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const InputView = require("./InputView");

class App {
  #game;
  constructor() {
    this.#game = new BridgeGame();
  }

  play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.readBridgeSize.bind(this));
  }

  readBridgeSize(length) {
    this.#game.makeRealBridge(Number(length));
    this.readMoving();
  }

  readMoving() {
    InputView.readMoving(this.move.bind(this));
  }

  move(cmd) {
    let result = this.#game.move(cmd);
    OutputView.printMap(this.#game.userBridge);
    this.checkFinish(result);
  }

  checkFinish(result) {
    if (result === "O") {
      if (this.#game.realBridge.length <= this.#game.curr) {
        OutputView.printResult(this.#game.userBridge, this.#game.tryCnt, true);
        Console.close();
        return;
      }
      this.readMoving();
    } else {
      InputView.readGameCommand(this.makeDecision.bind(this));
    }
  }

  makeDecision(cmd) {
    if (cmd === "R") {
      this.#game.retry();
      this.readMoving();
    } else {
      OutputView.printResult(this.#game.userBridge, this.#game.tryCnt, false);
      Console.close();
    }
  }
}

module.exports = App;
