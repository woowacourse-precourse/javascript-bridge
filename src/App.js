const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  generateBridge(size) {
    const newBridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);

    this.#bridgeGame.setBridge(newBridge);

    return newBridge;
  }
}

module.exports = App;
