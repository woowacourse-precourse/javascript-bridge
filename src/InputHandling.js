const InputView = require('./InputView');
const Validation = require('./Validation')
class InputHandling {
  play() {
    InputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(size) {
    Validation.checkBridgeSize(size);
  }
}

module.exports = InputHandling;
