const BridgeGame = require('./BridgeGame');
const OutputView = require('./views/OutputView');

class App {
  #game = new BridgeGame();

  play() {
    OutputView.printStartMessage();
    this.#game.start();
  }
}

module.exports = App;
