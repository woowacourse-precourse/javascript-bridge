const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const BridgeGame = require('./domain/BridgeGame');
const Validator = require('./view/Validator');
const { GAME_COMMAND } = require('./constants/bridgeGame');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.validator = new Validator();
  }

  play() {
    OutputView.printStart();
    this.getBridgeSizeInput();
  }

  getBridgeSizeInput() {
    InputView.readBridgeSize(this.requestBridgeSize.bind(this));
  }

  requestBridgeSize(bridgeSize) {
    try {
      this.validator.checkBridgeSize(bridgeSize);
      this.bridgeGame.makeBridgeMap(bridgeSize);
      this.getBridgeMovementDirection();
    } catch (errorType) {
      OutputView.printError(errorType);
      this.getBridgeSizeInput();
    }
  }

  getBridgeMovementDirection() {
    InputView.readMoving(this.requestMovementDirection.bind(this));
  }

  requestMovementDirection(moveCommand) {
    try {
      this.validator.checkMoveCommand(moveCommand);
      OutputView.printMap(this.bridgeGame.drawBridgeMap(moveCommand));
      this.bridgeGame.move();
      this.checkGameState();
    } catch (errorType) {
      OutputView.printError(errorType);
      this.getBridgeMovementDirection();
    }
  }

  checkGameState() {
    if (this.#checkGameSuccess()) {
      return this.#exitGame();
    }
    if (this.#checkGameOver()) {
      return this.requestGameOverCommand();
    }
    this.getBridgeMovementDirection();
  }

  #checkGameSuccess() {
    return this.bridgeGame.checkGameSuccess();
  }

  #checkGameOver() {
    return this.bridgeGame.checkGameOver();
  }

  requestGameOverCommand() {
    return InputView.readGameCommand(this.requestRetryGame.bind(this));
  }

  requestRetryGame(retryCommand) {
    try {
      this.validator.checkRetryCommand(retryCommand);
      this.checkRetryStatus(retryCommand);
    } catch (errorType) {
      OutputView.printError(errorType);
      this.requestGameOverCommand();
    }
  }

  checkRetryStatus(retryCommand) {
    const { quit, retry } = GAME_COMMAND;
    if (retryCommand === quit) {
      return this.#exitGame();
    }
    if (retryCommand === retry) {
      this.bridgeGame.retry();
      this.getBridgeMovementDirection();
    }
    this.requestGameOverCommand();
  }

  #exitGame() {
    OutputView.printResult(
      this.bridgeGame.getUserGameMap(),
      this.bridgeGame.checkGameOver(),
      this.bridgeGame.getUserTryCount()
    );
    OutputView.exit();
  }
}

const app = new App();
app.play();

module.exports = App;
