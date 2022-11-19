const InputValidator = require('./InputValidator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  constructor() {
    this.bridgeSize;
  }
  play() {
    InputView.readBridgeSize(this.handleInputLength.bind(this));
  }

  handleInputLength(input) {
    try {
      if (!InputValidator.isValidLength(input)) {
        throw new Error('[ERROR] : 유효한 길이가 아닙니다.');
      }
      this.bridgeSize = +input;
    } catch (error) {
      OutputView.printMessage(error.message);
      InputView.readBridgeSize(this.handleInputLength.bind(this));
    }
  }
}

module.exports = App;
