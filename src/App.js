const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const InputView = require("./InputView");

class App {
  #game;
  constructor() {
    this.#game = new BridgeGame();
  }
  play() {}
  readBridgeSize() {}
  readMoving() {}
  move() {}

  checkFinish(result) {
    if (result === "O") {
      if (this.#game.realBridge.length <= this.#game.curr) {
        OutputView.printResult(
          this.#game.upBridge,
          this.#game.downBridge,
          true
        );
        Console.close();
        return;
      }
      this.readMoving();
    } else {
      InputView.readGameCommand(this.checkGameCmd.bind(this));
    }
  }

  checkGameCmd(cmd) {
    if (cmd === "R") {
      this.#game.retry();
      this.readMoving();
    } else {
      OutputView.printResult(this.#game.upBridge, this.#game.downBridge, false);
      Console.close();
    }
  }
}

module.exports = App;
