const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validator = require("./utils/validator.js");
const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker.js");
const BridgeMachine = require("./BridgeRandomNumberGenerator.js");
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
    this.validator = new Validator();
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
      this.validator.isValidLength(length);
      this.#bridge = BridgeMaker.makeBridge(length, BridgeMachine.generate);
      this.getDirection();
    } catch (error) {
      Console.print(error);
      this.getBridgeSize();
    }
  }

  getDirection() {
    InputView.readMoving(this.movingDirectionInput.bind(this));
  }

  movingDirectionInput(square) {
    try {
      this.validator.isUpAndDown(square);
      this.checkCurrentStatus(sqaure);
      this.checkGameFinished() ? this.endGame() : this.getMovingDirection();
    } catch (error) {
      Console.print(error);
      this.getDirection();
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

  gameOver() {
    OutputView.resultMessage();
    OutputView.printMap(this.#currentBridge);
    OutputView.printResult(this.#try, false);
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
      Console.print(error);
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
}

module.exports = Controller;