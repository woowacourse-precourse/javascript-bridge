const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
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
    InputView.readBridgeSize(this.handleGameStartPhase.bind(this));
  }

  handleGameStartPhase(size) {
    try {
      this.validator.checkBridgeLengthInput(size);
    } catch (error) {
      this.readBridgeSizePhase();
    }
    this.generateBridgeGame(size);
    OutputView.printNewLine();
    this.readMovingPhase();
  }

  readMovingPhase() {
    InputView.readMoving(this.handleAnswerCheckPhase.bind(this));

  }

  generateBridgeGame(size) {
    this.#bridgeGame = new BridgeGame(
      new Bridge(BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate))
    );
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

  readGameCommandPhase() {
    InputView.readGameCommand(this.handleGameRetryPhase.bind(this));
  }

  handleGameEndPhase() {
    if(this.#bridgeGame.isGameEnd()) {
      OutputView.printResult(this.#bridgeGame.getResult(), this.#bridgeGame.getAttempts(), true);
      return;
    }
    this.#bridgeGame.move();
    InputView.readMoving(this.handleAnswerCheckPhase.bind(this));
  }

  handleGameRetryPhase(retryAnswer) {
    if (retryAnswer === 'R') {
      this.#bridgeGame.retry();
      InputView.readMoving(this.handleAnswerCheckPhase.bind(this));
      return;
    }
    OutputView.printResult(this.#bridgeGame.getResult(), this.#bridgeGame.getAttempts(), false);
  }
}

module.exports = BrideGameController;