const OutputView = require("./OutputView");
const InputView = require("./InputView");
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
    InputView.readMoving((playerInput) => {
      const command = InputView.getGameCommand(playerInput);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
