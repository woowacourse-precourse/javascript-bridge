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

  requestBridgeSize(size) {
    try {
      this.validator.checkBridgeSize(size);
      this.bridgeGame.setupGameMap(size);
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
    if (this.#isGameSuccess()) {
      return this.#exitGame();
    }
    if (this.#isGameOver()) {
      return this.requestGameOverCommand();
    }
    this.getBridgeMovementDirection();
  }

  #isGameSuccess() {
    return this.bridgeGame.isSuccess();
  }

  #isGameOver() {
    return this.bridgeGame.checkGameStatus();
  }

  requestGameOverCommand() {
    return InputView.readGameCommand(this.requestRetryGame.bind(this));
  }

  requestRetryGame(retryCommand) {
    try {
      this.validator.checkRetryCommand(retryCommand);
      this.checkRetryState(retryCommand);
    } catch (errorType) {
      OutputView.printError(errorType);
      this.requestGameOverCommand();
    }
  }

  checkRetryState(retryCommand) {
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
    OutputView.printResult({
      userGameMap: this.bridgeGame.getUserBridgeMap(),
      isSuccess: this.bridgeGame.checkGameStatus(),
      userTryCount: this.bridgeGame.getUserTryCount(),
    });
    return OutputView.exit();
  }
}

const app = new App();
app.play();

module.exports = App;
