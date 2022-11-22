const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputValidator = require("./InputValidator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const command = require("./utils/command");
const message = require("./utils/message");
const View = require("./View");

class App {
  constructor() {
    this.bridgeGame;
  }

  play() {
    OutputView.printMessage(message.GAME_START);
    InputView.readBridgeSize(this.handleInputLength.bind(this));
  }

  handleInputLength(input) {
    try {
      this.checkValid(
        input,
        InputValidator.isValidLength,
        message.ERROR_LENGTH
      );
      this.initBridges(+input);
      InputView.readMoving(this.handleInputStep.bind(this));
    } catch (error) {
      OutputView.printMessage(error.message);
      InputView.readBridgeSize(this.handleInputLength.bind(this));
    }
  }

  handleInputStep(input) {
    try {
      this.checkValid(input, InputValidator.isValidStep, message.ERROR_STEP);
      this.bridgeGame.bridgeSteps.push(input);
      OutputView.printMap(
        this.bridgeGame.answerSteps,
        this.bridgeGame.bridgeSteps
      );
      this.nextActionByMoveState(this.bridgeGame.move());
    } catch (error) {
      OutputView.printMessage(error.message);
      InputView.readMoving(this.handleInputStep.bind(this));
    }
  }

  nextActionByMoveState(action) {
    switch (action) {
      case "WIN":
        this.bridgeGame.win();
        View.close();
        break;
      case "MOVE":
        InputView.readMoving(this.handleInputStep.bind(this));
        break;
      case "FAIL":
        InputView.readGameCommand(this.handleInputCommand.bind(this));
      default:
    }
  }

  handleInputCommand(input) {
    try {
      this.checkValid(
        input,
        InputValidator.isValidCommand,
        message.ERROR_COMMAND
      );
      if (input === command.GAME_QUIT) {
        this.bridgeGame.lose();
        View.close();
      }
      if (input === command.GAME_RESTART) {
        this.bridgeGame.retry();
        InputView.readMoving(this.handleInputStep.bind(this));
      }
    } catch {
      OutputView.printMessage(error.message);
      InputView.readGameCommand(this.handleInputCommand.bind(this));
    }
  }

  initBridges(size) {
    this.bridgeGame = new BridgeGame(
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
