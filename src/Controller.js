const InputView = require("./InputView");
const Validation = require("./utils/validation.js");
const { Console } = require("@woowacourse/mission-utils");

class Controller {
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
    } catch (error) {
      Console.print(error);
    }
  }
}

module.exports = Controller;
