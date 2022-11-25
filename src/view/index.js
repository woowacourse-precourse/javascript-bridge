const InputView = require('./InputView');
const OutputView = require('./OutputView');

class View {
  #output;

  #input;

  constructor() {
    this.#input = InputView;
    this.#output = OutputView;
  }

  readBridgeSize(message, callback) {
    this.#input.readBridgeSize(message, callback);
  }

  readMoving(message, callback) {
    this.#input.readMoving(message, callback);
  }

  readGameCommand(message, callback) {
    this.#input.readGameCommand(message, callback);
  }

  printStart() {
    this.#output.printStartMessage();
  }

  printError(message) {
    this.#output.printError(message);
  }

  printMap(object) {
    this.#output.printMap(object);
  }

  printResult(object) {
    this.#output.printResult(object);
  }
}

module.exports = View;
