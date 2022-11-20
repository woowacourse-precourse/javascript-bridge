const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validation = require("./utils/validation");
const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeMachine = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");

class Controller {
  #bridge = [];
  #currentBridge = {
    up: [],
    down: [],
  };
  #correct;
  #try = 1;
  constructor() {
    this.validation = new Validation();
    this.bridgeGame = new BridgeGame();
  }
  start() {
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize(this.bridgeSizeForm.bind(this));
  }

  bridgeSizeForm(length) {
    try {
      this.validation.isValidLength(length);
      this.#bridge = BridgeMaker.makeBridge(length, BridgeMachine.generate);
      this.getMovingDirection();
    } catch (error) {
      this.bridgeSizeError(error);
    }
  }

  getMovingDirection() {
    InputView.readMoving(this.movingDirectionForm.bind(this));
  }

  movingDirectionForm(square) {
    try {
      this.validation.isUpOrDown(square);
      this.checkCurrentStatus(square);
      this.checkGameFinished() ? this.endGame() : this.getMovingDirection();
    } catch (error) {
      this.bridgeMovingError(error);
    }
  }

  setBridge(square) {
    const [upBridge, downBridge, correct] = this.bridgeGame.move(
      this.#bridge,
      square,
    );
    this.#currentBridge.up = upBridge;
    this.#currentBridge.down = downBridge;
    this.#correct = correct;
  }

  checkCurrentStatus(square) {
    this.setBridge(square);
    OutputView.printMap(this.#currentBridge);
    !this.#correct && this.getBridgeCommand();
  }

  checkGameFinished() {
    if (this.#currentBridge.up.length === this.#bridge.length && this.#correct)
      return true;
  }

  endGame() {
    OutputView.resultMessage();
    OutputView.printMap(this.#currentBridge);
    OutputView.printResult(this.#try, true);
    Console.close;
  }

  getBridgeCommand() {
    InputView.readGameCommand(this.commandForm.bind(this));
  }

  commandForm(input) {
    try {
      this.validation.isRestartOrQuit(input);
      this.RetryOrQuitGame(input);
    } catch (error) {
      this.bridgeCommandError(error);
    }
  }

  retryGame() {
    this.bridgeGame.retry();
    this.getMovingDirection();
  }

  quitGame() {
    OutputView.printMap(this.#currentBridge);
    OutputView.printResult(this.#try, false);
    Console.close();
  }

  RetryOrQuitGame(input) {
    if (input === "R") {
      this.retryGame();
    }
    if (input === "Q") {
      this.quitGame();
    }
    this.#try += 1;
  }

  bridgeSizeError(error) {
    OutputView.printError(error);
    this.getBridgeSize();
  }

  bridgeMovingError(error) {
    OutputView.printError(error);
    this.getMovingDirection();
  }

  bridgeCommandError(error) {
    OutputView.printError(error);
    this.getBridgeCommand();
  }
}

module.exports = Controller;
