const BridgeGame = require('./BridgeGame');

class App {
  #game = new BridgeGame();

  play() {
    this.#game.start();
  }
}

module.exports = App;
