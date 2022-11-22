const InputView = require("./InputView");
const Validator = require("./utils/validator.js");
const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker.js");
const BridgeMachine = require("./BridgeRandomNumberGenerator.js");
const BridgeGame = require("./BridgeGame");


class Controller {
  #bridge;
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
      const [upBridge, downBridge] = this.bridgeGame.move(this.#bridge, square);
      OutputView.printMap(this.#currentBridge);
    } catch (error) {
      Console.print(error);
      this.getDirection();
    }
  }
}

module.exports = Controller;