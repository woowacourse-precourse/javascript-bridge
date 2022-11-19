const InputView = require("./InputView");
const Validation = require("./utils/validation");
const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeMachine = require("./BridgeRandomNumberGenerator");

class Controller {
  #bridge;
  constructor() {
    this.validation = new Validation();
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
    } catch (error) {
      Console.print(error);
    }
  }
}

module.exports = Controller;
