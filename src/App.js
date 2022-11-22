const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputValidator = require("./InputValidator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const command = require("./utils/command");
const message = require("./utils/message")
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
      if (!InputValidator.isValidLength(input)) {
        throw new Error(message.ERROR_LENGTH);
      }
      this.initBridges(+input);
      InputView.readMoving(this.handleInputStep.bind(this));
    } catch (error) {
      OutputView.printMessage(error.message);
      InputView.readBridgeSize(this.handleInputLength.bind(this));
    }
  }

  handleInputStep(input) {
    try {
      if (!InputValidator.isValidStep(input)) {
        throw new Error(message.ERROR_STEP);
      }
      this.bridgeGame.bridgeSteps.push(input);
      OutputView.printMap(
        this.bridgeGame.answerSteps,
        this.bridgeGame.bridgeSteps
      );
      const result = this.bridgeGame.move();
      if (result === "WIN") {
        this.bridgeGame.gameStatus = "성공";
        OutputView.printResult(
          this.bridgeGame.answerSteps,
          this.bridgeGame.bridgeSteps,
          this.bridgeGame.gameStatus,
          this.bridgeGame.gameCount
        );
        View.close();
      }
      if (result === "MOVE") {
        InputView.readMoving(this.handleInputStep.bind(this));
      }
      if (result === "FAIL") {
        this.bridgeGame.gameStatus = "실패";
        InputView.readGameCommand(this.handleInputCommand.bind(this));
      }
    } catch (error) {
      OutputView.printMessage(error.message);
      InputView.readMoving(this.handleInputStep.bind(this));
    }
  }

  handleInputCommand(input) {
    try {
      if (!InputValidator.isValidCommand(input)) {
        throw new Error(message.ERROR_COMMAND);
      }
      if (input === command.GAME_QUIT) {
        OutputView.printResult(
          this.bridgeGame.answerSteps,
          this.bridgeGame.bridgeSteps,
          this.bridgeGame.gameStatus,
          this.bridgeGame.gameCount
        );
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
}

module.exports = App;
