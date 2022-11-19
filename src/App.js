const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeValidator = require('./BridgeValidator');

const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  #bridgeGame;

  play() {
    OutputView.printGameStartMessage();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this);
  }

  validateBridgeSize(bridgeSizeInput) {
    try {
      BridgeValidator.validateBridgeSize(bridgeSizeInput);
      this.initBridgeGame(parseInt(bridgeSizeInput, 10));
    } catch (err) {
      OutputView.printErrorMessage(err.message);
      this.inputBridgeSize();
    }
  }

  initBridgeGame(bridgeSize) {
    this.#bridgeGame = new BridgeGame(
      BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate),
    );
    this.inputMoving();
  }

  inputMoving() {
    InputView.readMoving(this);
  }

  validateMoving(moving) {
    try {
      BridgeValidator.validateMoving(moving);
      this.tryMove(moving);
    } catch (err) {
      OutputView.printErrorMessage(err.message);
      this.inputMoving();
    }
  }

  tryMove(moving) {
    this.#bridgeGame.move(moving);
    OutputView.printMap(this.#bridgeGame.getMoveHistory());

    if (this.#bridgeGame.isGameOver()) {
      console.log('game over');
      return;
    }

    this.inputMoving();
  }
}

new App().play();

module.exports = App;
