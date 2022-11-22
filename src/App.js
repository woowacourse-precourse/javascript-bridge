const OutputView = require("../src/OutputView");
const InputView = require("../src/InputView");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeGame = require("../src/BridgeGame");

class App {
  #bridgeGame;
  play() {
    OutputView.printStart();
    const bridgeSize = InputView.readBridgeSize();
    this.#bridgeGame = new BridgeGame(
      BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate)
    );
    this.playing();
  }
  playing() {
    let result = 1;
    while (result === 1) {
      result = this.#bridgeGame.move(InputView.readMoving());
      OutputView.printMap(this.#bridgeGame.getCurrentMap(result));
    }
    result === 2 ? this.gameSuccess() : this.gameOver();
  }
  gameSuccess() {
    OutputView.printResult(this.#bridgeGame.getCurrentMap(2), "성공", this.#bridgeGame.getNumberOfTry());
    return;
  }
  gameOver() {
    let gameCommand = InputView.readGameCommand();
    if (gameCommand === "Q") {
      OutputView.printResult(this.#bridgeGame.getCurrentMap(-1), "실패", this.#bridgeGame.getNumberOfTry());
      return;
    }
  }
}

module.exports = App;
