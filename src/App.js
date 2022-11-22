const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.init();
  }

  init() {
    InputView.readBridgeSize(this.#makeBridge.bind(this));
  }

  #makeBridge(size) {
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;
    const bridge = BridgeMaker.makeBridge(size, generateRandomNumber);
    this.bridgeGame.saveBridge(bridge);
  }

  play() {
  }

}

module.exports = App;
