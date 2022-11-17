const BridgeGame = require("./BridgeGame");

class App {
  #game;
  constructor() {
    this.#game = new BridgeGame();
  }
  play() {
    this.#game.start();
  }
}

module.exports = App;
