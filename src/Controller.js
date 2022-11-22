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
      this.setBridge(square);
      OutputView.printMap(this.#currentBridge);
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
}

module.exports = Controller;