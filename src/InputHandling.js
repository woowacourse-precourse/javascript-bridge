const InputView = require('./InputView');

class InputHandling {
  play() {
    InputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(input) {}
}

module.exports = InputHandling;
