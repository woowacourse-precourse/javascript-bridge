const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const Validation = require('./Validation');

class InputHandling {
  play() {
    InputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(size) {
    try {
      Validation.checkBridgeSize(size);
    } catch (error) {
      Console.print(error);
      InputView.readBridgeSize(this.handleBridgeSize.bind(this));
    }
  }
}

module.exports = InputHandling;
