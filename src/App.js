const OutputView = require("../src/OutputView");
const InputView = require("../src/InputView");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeGame = require("../src/BridgeGame");
const BridgeTest = require("../src/BridgeTest");

const SUCCESS_MOVE = 1;
const SUCCESS_GAME = 2;
const FAIL_MOVE = -1;
class App {
  #bridgeGame;
  play() {
    OutputView.printStart();
    const bridgeSize = InputView.readBridgeSize();
    const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    new BridgeTest(bridge);
    this.#bridgeGame = new BridgeGame(bridge);
    this.playing();
  }
  playing() {
    let gameResult = SUCCESS_MOVE;
    while (gameResult === SUCCESS_MOVE) {
      gameResult = this.#bridgeGame.move(InputView.readMoving());
      OutputView.printMap(this.#bridgeGame.getCurrentMap(gameResult));
    }
    gameResult === SUCCESS_GAME ? this.gameSuccess() : this.gameOver();
  }
  gameSuccess() {
    OutputView.printResult(this.#bridgeGame.getCurrentMap(SUCCESS_GAME), "성공", this.#bridgeGame.getNumberOfTry());
    return;
  }
  gameOver() {
    let gameCommand = InputView.readGameCommand();
    if (gameCommand === "Q") {
      OutputView.printResult(this.#bridgeGame.getCurrentMap(FAIL_MOVE), "실패", this.#bridgeGame.getNumberOfTry());
      return;
    }
    if (gameCommand === "R") {
      this.#bridgeGame.retry();
      this.playing();
    }
  }
}

module.exports = App;
