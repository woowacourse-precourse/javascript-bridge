const InputView = require("./InputView");
const Validation = require("./utils/validation");
const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeMachine = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");

class Controller {
  #bridge;
  #currentBridge = {
    up: [],
    down: [],
  };
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
      Console.print(error);
      this.getBridgeSize();
    }
  }

  getMovingDirection() {
    InputView.readMoving(this.movingDirectionForm.bind(this));
  }

  movingDirectionForm(square) {
    try {
      this.validation.isUpOrDown(square);
      this.setBridge(square);
      OutputView.printMap(this.#currentBridge);
    } catch (error) {
      Console.print(error);
      this.getMovingDirection();
    }
  }

  setBridge(square) {
    const [upBridge, downBridge] = this.bridgeGame.move(this.#bridge, square);
    this.#currentBridge.up = upBridge;
    this.#currentBridge.down = downBridge;
  }
}

module.exports = Controller;
