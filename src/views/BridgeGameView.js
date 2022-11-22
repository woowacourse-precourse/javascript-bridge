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

  readGameCommand(onInput) {
    this.#input.readGameCommand(onInput);
  }

  print(message) {
    this.#output.print(message);
  }

  printStart() {
    this.#output.printStart();
  }

  printMap(map) {
    this.#output.printMap(map);
  }

  printResult(gameResult) {
    this.#output.printResult(gameResult);
  }
}

module.exports = BridgeGameView;
