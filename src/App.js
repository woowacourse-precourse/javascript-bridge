const BridgeGame = require('./BridgeGame.js');
class App {
  #game

  constructor() {
    this.#game = new BridgeGame();
  }

  play() {
    (async() => {
        const bridge = await this.initBridge();
        this.#game.setBridge(bridge);
        await this.runGame();
    })();
  }
}

module.exports = App;
