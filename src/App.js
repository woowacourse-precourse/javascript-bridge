const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { COMMAND } = require('./utils/constructor');
const { generate } = require('./BridgeRandomNumberGenerator');

class App {
  #game

  constructor() {
    this.#game = new BridgeGame();
  }

  initBridge(size) {
    this.#game.setBridge(size, generate);
    InputView.readMoving((movement) => this.runGame(movement));
  }

  play() {
    InputView.readBridgeSize((size) => this.initBridge(size));
  }
}

module.exports = App;