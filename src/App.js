const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./domain/BridgeGame');
const BridgeMapMaker = require('./domain/BridgeMapMaker');

const BridgeSizeValidator = require('./validators/BridgeSizeValidator');
const BridgeMovingValidator = require('./validators/BridgeMovingValidator');
const BridgeGameCommandValidator = require('./validators/BridgeGameCommandValidator');

const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');

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
      this.executeGameCommand(gameCommand);
    } catch (err) {
      OutputView.printErrorMessage(err.message);
      this.inputGameCommand();
    }
  }

  executeGameCommand(gameCommand) {
    if (gameCommand === BridgeGameCommandValidator.RETRY) {
      this.retry();
      return;
    }

    this.gameOver();
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

module.exports = App;
