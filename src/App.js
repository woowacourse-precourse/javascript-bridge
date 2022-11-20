const BridgeGame = require('./BridgeGame');

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    this.#bridgeGame.start();
  }
}

module.exports = App;
