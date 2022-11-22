const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const BridgeGame = require('./domain/BridgeGame');
const Validator = require('./validate/Validator');
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

  requestMovementDirection(command) {
    try {
      this.validator.checkMoveCommand(command);
      OutputView.printMap(this.bridgeGame.drawBridgeMap(command));
      this.checkGameState();
    } catch (errorType) {
      OutputView.printError(errorType);
      this.getBridgeMovementDirection();
    }
  }

  checkGameState() {
    this.bridgeGame.move();
    if (this.#isGameSuccess()) {
      return this.#showResult();
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

  requestRetryGame(command) {
    try {
      this.validator.checkRetryCommand(command);
      this.checkRetryState(command);
    } catch (errorType) {
      OutputView.printError(errorType);
      this.requestGameOverCommand();
    }
  }

  checkRetryState(command) {
    this.getQuitCommand(command);
    this.getRetryCommand(command);
  }

  getQuitCommand(command) {
    const { quit } = GAME_COMMAND;

    if (command === quit) {
      this.#showResult();
    }
  }

  getRetryCommand(command) {
    const { retry } = GAME_COMMAND;

    if (command === retry) {
      this.bridgeGame.retry();
      this.getBridgeMovementDirection();
    }
  }

  #showResult() {
    OutputView.printResult({
      userGameMap: this.bridgeGame.getUserBridgeMap(),
      isSuccess: this.bridgeGame.checkGameStatus(),
      userTryCount: this.bridgeGame.getUserTryCount(),
    });
    return this.#exitGame();
  }

  #exitGame() {
    OutputView.exit();
  }
}

const app = new App();
app.play();

module.exports = App;
