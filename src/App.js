const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeMapMaker = require('./BridgeMapMaker');
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
    } catch (err) {
      OutputView.printErrorMessage(err.message);
      this.inputBridgeSize();
    }

    this.initBridgeGame(parseInt(bridgeSizeInput, 10));
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
    } catch (err) {
      OutputView.printErrorMessage(err.message);
      this.inputMoving();
    }

    this.tryMove(moving);
  }

  tryMove(moving) {
    this.#bridgeGame.move(moving);
    OutputView.printMap(
      BridgeMapMaker.makeBridgeMap(this.#bridgeGame.getMoveHistory()),
    );
    if (this.isNextCommand()) {
      this.executeNextCommand();
      return;
    }
    this.inputMoving();
  }

  isNextCommand() {
    return this.#bridgeGame.isRetry() || this.#bridgeGame.isClear();
  }

  executeNextCommand() {
    if (this.#bridgeGame.isRetry()) {
      this.inputGameCommand();
      return;
    }

    this.gameOver();
  }

  inputGameCommand() {
    InputView.readGameCommand(this);
  }
}

new App().play();

module.exports = App;
