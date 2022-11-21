const InputView = require('./InputView');
const OutputView = require('./OutputView');

class BridgeView {
  #input;
  #output;

  constructor(inputView = InputView, outputView = OutputView) {
    this.#input = inputView;
    this.#output = outputView;
  }

  readBridgeSize() {
    this.#input.readBridgeSize();
  }

  readMoving() {
    this.#input.readMoving();
  }

  readGameCommand() {
    this.#input.readGameCommand();
  }

  printStart() {
    this.#output.printStart();
  }

  printMap() {
    this.#output.printMap();
  }

  printResult() {
    this.#output.printResult();
  }
}

module.exports = BridgeView;
