const BridgeGame = require('./BridgeGame.js');
const InputView = require('./InputView.js');
const OutputView = require('./OutputView.js');
const { makeBridge } = require('./BridgeMaker.js');
const { generate } = require('./BridgeRandomNumberGenerator.js');
const { COMMAND } = require('./constructor.js');
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

  async crossingBridge() {
    const movement = await InputView.readMoving();
    const result = this.#game.move(movement);
    return result;
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
