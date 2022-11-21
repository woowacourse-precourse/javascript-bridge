const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
  #bridgeGame;

  #input;

  #output;

  constructor() {
    this.#bridgeGame = new BridgeGame();
    this.#input = InputView;
    this.#output = OutputView;
  }

  printStartMessage() {
    const message = OutputView.message.START;

    this.#output.print(message);
  }
}

module.exports = App;
