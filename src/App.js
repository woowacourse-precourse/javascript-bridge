const BridgeGame = require("./objects/BridgeGame");
const BridgeRandomNumberGenerator = require("./utils/BridgeRandomNumberGenerator");
const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("./views/OutputView");
const InputView = require("./views/InputView");
const { makeBridge } = require("./BridgeMaker");

class App {
  #bridgeGame;
  play() {
    OutputView.printMessage("다리 건너기 게임을 시작합니다.\n");
    this.requestSize();
  }
  requestSize() {
    InputView.readBridgeSize(this.createBridge.bind(this));
  }
  createBridge(size) {
    const bridge = makeBridge(
      Number(size),
      BridgeRandomNumberGenerator.generate
    );
    console.log(bridge);
    this.#bridgeGame = new BridgeGame(bridge);
    OutputView.lineBreak();
    this.requestMove();
  }
  requestMove() {
    InputView.readMoving(this.moveUser.bind(this));
  }
  moveUser(direction) {
    this.#bridgeGame.move(direction);
    if (this.#bridgeGame.isGameFinish(direction)) {
      return this.isEnd();
    }
    if (this.#bridgeGame.isCorrectDirection(direction)) {
      return this.isCorrect();
    }
    this.isFail();
  }
  isCorrect() {
    OutputView.printMap(this.#bridgeGame.mapBridge());
    this.requestMove();
  }
  isFail() {
    OutputView.printMap(this.#bridgeGame.mapErrorBridge());
    this.requestRetry();
  }
  isEnd() {
    this.winGame(true);
    return;
  }
  winGame(result) {
    const [bridge, playCount] = this.#bridgeGame.getResult();
    OutputView.printResult(bridge, playCount, result);
  }
  loseGame(result) {
    const [bridge, playCount] = this.#bridgeGame.getResult();
    OutputView.printResult(bridge, playCount, result);
  }
  requestRetry() {
    InputView.readGameCommand(this.retryOrQuit.bind(this));
  }
  retryOrQuit(command) {
    if (command === "R") {
      this.#bridgeGame.retry();
      this.requestMove();
    }
    if (command === "Q") {
      this.loseGame(false);
    }
  }
}
const app = new App();
app.play();

module.exports = App;
