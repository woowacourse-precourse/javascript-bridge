const InputView = require('./InputView');
const OutputView = require('./OutputView');

class BridgeGameView {
  #input;
  #output;

  constructor(inputView = InputView, outputView = OutputView) {
    this.#input = inputView;
    this.#output = outputView;
  }

  readBridgeSize(onInput) {
    this.#input.readBridgeSize(onInput);
  }

  readMoving(onInput) {
    this.#input.readMoving(onInput);
  }

  readGameCommand() {
    this.#input.readGameCommand();
  }

  print(message) {
    this.#output.print(message);
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

module.exports = BridgeGameView;
