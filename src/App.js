const BridgeGame = require('./BridgeGame.js');
const InputView = require('./InputView.js');
const { makeBridge } = require('./BridgeMaker.js');
const { generate } = require('./BridgeRandomNumberGenerator.js');

class App {
  #game

  constructor() {
    this.#game = new BridgeGame();
  }

  async initBridge() {
    const bridgeSize = await InputView.readBridgeSize();
    const bridge = makeBridge(bridgeSize, generate);
    return bridge;
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
