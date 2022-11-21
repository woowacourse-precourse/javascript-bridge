const { Console } = require('@woowacourse/mission-utils');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const Validation = require('./Validation');

class InputHandling {
  #answerBridgeArray

  play() {
    InputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(size) {
    try {
      Validation.checkBridgeSize(size);
      this.#answerBridgeArray = makeBridge(size, generate);
    } catch (error) {
      Console.print(error);
      InputView.readBridgeSize(this.handleBridgeSize.bind(this));
    }
  }
}

module.exports = InputHandling;
