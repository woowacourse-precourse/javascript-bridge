const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeMapMaker = require('./BridgeMapMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const BridgeSizeValidator = require('./BridgeSizeValidator');
const BridgeMovingValidator = require('./BridgeMovingValidator');
const BridgeGameCommandValidator = require('./BridgeGameCommandValidator');

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
      BridgeSizeValidator.validate(bridgeSizeInput);
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
      BridgeMovingValidator.validate(moving);
      this.tryMove(moving);
    } catch (err) {
      OutputView.printErrorMessage(err.message);
      this.inputMoving();
    }
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

  validateGameCommand(gameCommand) {
    try {
      BridgeGameCommandValidator.validate(gameCommand);
      this.retry();
    } catch (err) {
      OutputView.printErrorMessage(err.message);
      this.inputGameCommand();
    }
  }

  retry() {
    this.#bridgeGame.retry();
    this.inputMoving();
  }

  gameOver() {
    OutputView.printResult({
      bridgeMap: BridgeMapMaker.makeBridgeMap(
        this.#bridgeGame.getMoveHistory(),
      ),
      isClear: this.#bridgeGame.isClear(),
      totalTryCount: this.#bridgeGame.getTotalTryCount(),
    });
  }
}

new App().play();

module.exports = App;
