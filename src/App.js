const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const {
  isValidCommand,
  isValidLength,
  isValidStep,
} = require('./InputValidator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const command = require('./util/command');
const message = require('./util/message');
const View = require('./View');

class App {
  constructor() {
    this.game;
  }

  play() {
    OutputView.printMessage(message.GAME_START);
    InputView.readBridgeSize(this.handleInputBridgeSize.bind(this));
  }

  handleInputBridgeSize(input) {
    try {
      this.checkValid(input, isValidLength, message.ERROR_LENGTH);
      this.initBridges(+input);
      InputView.readMoving(this.handleInputStep.bind(this));
    } catch (error) {
      OutputView.printMessage(error.message);
      InputView.readBridgeSize(this.handleInputBridgeSize.bind(this));
    }
  }

  handleInputStep(input) {
    try {
      this.checkValid(input, isValidStep, message.ERROR_STEP);
      this.game.bridgeSteps.push(input);
      OutputView.printMap(this.game.answerSteps, this.game.bridgeSteps);
      this.nextActionByMoveState(this.game.move());
    } catch (error) {
      OutputView.printMessage(error.message);
      InputView.readMoving(this.handleInputStep.bind(this));
    }
  }

  nextActionByMoveState(action) {
    switch (action) {
      case 'WIN':
        this.game.win();
        View.close();
        break;
      case 'MOVE':
        InputView.readMoving(this.handleInputStep.bind(this));
        break;
      case 'FAIL':
        InputView.readGameCommand(this.handleInputCommand.bind(this));
      default:
    }
  }

  handleInputCommand(input) {
    try {
      this.checkValid(input, isValidCommand, message.ERROR_COMMAND);
      this.nextActionByCommand(input);
    } catch {
      OutputView.printMessage(error.message);
      InputView.readGameCommand(this.handleInputCommand.bind(this));
    }
  }

  nextActionByCommand(action) {
    switch (action) {
      case command.GAME_QUIT:
        this.quit();
        break;
      case command.GAME_RESTART:
        this.restartGame();
        break;
      default:
    }
  }

  quit() {
    this.game.lose();
    View.close();
  }

  restartGame() {
    this.game.retry();
    InputView.readMoving(this.handleInputStep.bind(this));
  }

  initBridges(size) {
    this.game = new BridgeGame(
      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)
    );
  }

  checkValid(input, predicate, errorMessage) {
    if (!predicate(input)) {
      throw new Error(errorMessage);
    }
  }
}

module.exports = App;
