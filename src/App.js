const InputValidator = require("./InputValidator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  constructor() {
    this.game;
  }

  play() {
    InputView.readBridgeSize(this.handleInputLength.bind(this));
  }

  handleInputLength(input) {
    try {
      if (!InputValidator.isValidLength(input)) {
        throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
      }
      this.game = +input;
    } catch (error) {
      OutputView.printMessage(error.message);
      InputView.readBridgeSize(this.handleInputLength.bind(this));
    }
  }
}

module.exports = App;
