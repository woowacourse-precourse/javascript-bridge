const OutputView = require("./OutputView");
const InputView = require("./InputView");
const Bridge = require("./Bridge");
const BridgeGame = require("./BridgeGame");
const { Console } = require("@woowacourse/mission-utils");

class App {
  #bridge;
  #bridgeGame;

  constructor() {
    this.#bridge = new Bridge();
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printGameStartPhrase();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((playerInput) => {
      const bridgeSize = InputView.getBridgeSize(playerInput);
      this.makeBridge(bridgeSize);
    });
  }

  makeBridge(bridgeSize) {
    console.log("bridgeSize:", bridgeSize);
    this.#bridgeGame.makeBridge(bridgeSize);
    this.inputMoving();
  }

  inputMoving() {
    InputView.readMoving((playerInput) => {
      const moving = InputView.getMoving(playerInput);
      this.moveOnBridge(moving);
    });
  }

  moveOnBridge(moving) {
    this.#bridgeGame.move(moving);
    if (this.#bridgeGame.isMovable()) {
      this.inputMoving();
    } else {
      this.askRetryOrQuit();
    }
  }

  askRetryOrQuit() {
    const gameState = this.#bridgeGame.getState();
    if (this.#bridgeGame.loseGame()) {
      InputView.readGameCommand((playerInput) => {
        const command = InputView.getGameCommand(playerInput);
        if (command === "R") this.retryGame();
        if (command === "Q") this.quitGame(gameState);
      });
    } else {
      this.winGame(gameState);
    }
  }

  winGame(gameState) {
    this.#bridgeGame.setState("성공");
    const [upsideBridge, downsideBridge] = this.#bridgeGame.getResultBridge();
    this.#bridge.showFinalResult(upsideBridge, downsideBridge, gameState);
    this.endGame();
  }

  retryGame() {
    this.#bridgeGame.retry();
    this.inputMoving();
  }

  quitGame(gameState) {
    this.#bridgeGame.setState("실패");
    const [upsideBridge, downsideBridge] = this.#bridgeGame.getResultBridge();
    this.#bridge.showFinalResult(upsideBridge, downsideBridge, gameState);
    this.endGame();
  }

  endGame() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
