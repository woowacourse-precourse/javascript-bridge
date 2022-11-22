const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE, PLAYER_CHOICE } = require("./utils/Constants");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Bridge = require("./Bridge");
const BridgeGame = require("./BridgeGame");

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
        if (command === PLAYER_CHOICE.retry) this.retryGame();
        if (command === PLAYER_CHOICE.exit) this.quitGame(gameState);
      });
    } else this.winGame(gameState);
  }

  winGame(gameState) {
    this.#bridgeGame.setState(GAME_MESSAGE.success);
    const [upsideBridge, downsideBridge] = this.#bridgeGame.getResultBridge();
    this.#bridge.showFinalResult(upsideBridge, downsideBridge, gameState);
    this.endGame();
  }

  retryGame() {
    this.#bridgeGame.retry();
    this.inputMoving();
  }

  quitGame(gameState) {
    this.#bridgeGame.setState(GAME_MESSAGE.fail);
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
