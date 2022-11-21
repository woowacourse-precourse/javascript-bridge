const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const { HOTKEY } = require("../constants/constants");
const Bridge = require("../models/Bridge");
const BridgeGame = require("../models/BridgeGame");
const Validator = require("../models/Validator");
const InputView = require("../views/InputView");
const OutputView = require("../views/OutputView");

class BrideGameController {
  #bridgeGame;

  constructor() {
    this.validator = new Validator();
  }

  start() {
    OutputView.printIntialMessage();
    this.readBridgeSizePhase();
  }

  readBridgeSizePhase() {
    InputView.readBridgeSize(this.validateBridgeSize.bind(this));
  }

  validateBridgeSize(size) {
    try {
      this.validator.checkBridgeLengthInput(size);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      this.readBridgeSizePhase();
      return;
    }
    this.handleGameStartPhase(size);
  }

  handleGameStartPhase(size) {
    this.generateBridgeGame(size);
    OutputView.printNewLine();
    this.readMovingPhase();
  }

  generateBridgeGame(size) {
    this.#bridgeGame = new BridgeGame(
      new Bridge(BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate))
    );
  }

  readMovingPhase() {
    InputView.readMoving(this.validateMoving.bind(this));
  }

  validateMoving(direction) {
    try {
      this.validator.checkDirectionInput(direction);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      this.readMovingPhase();
      return;
    }
    this.handleAnswerCheckPhase(direction);
  }

  handleAnswerCheckPhase(direction) {
    this.#bridgeGame.updateResult(direction);
    OutputView.printMap(this.#bridgeGame.getResult());
    if(this.#bridgeGame.isAnswer(direction)) {
      this.handleGameEndPhase();
      return;
    }
    this.readGameCommandPhase();
  }

  handleGameEndPhase() {
    if(this.#bridgeGame.isGameEnd()) {
      OutputView.printResult(this.#bridgeGame.getResult(), this.#bridgeGame.getAttempts(), true);
      return;
    }
    this.#bridgeGame.move();
    InputView.readMoving(this.handleAnswerCheckPhase.bind(this));
  }

  readGameCommandPhase() {
    InputView.readGameCommand(this.validateGameCommand.bind(this));
  }

  validateGameCommand(retryAnswer) {
    try {
      this.validator.checkRetryInput(retryAnswer);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      this.readGameCommandPhase();
      return;
    }
    this.handleGameRetryPhase(retryAnswer)
  }

  handleGameRetryPhase(retryAnswer) {
    if (retryAnswer === HOTKEY.retry) {
      this.#bridgeGame.retry();
      InputView.readMoving(this.handleAnswerCheckPhase.bind(this));
      return;
    }
    OutputView.printResult(this.#bridgeGame.getResult(), this.#bridgeGame.getAttempts(), false);
  }
}

module.exports = BrideGameController;