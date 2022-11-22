const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.init();
  }

  init() {
    OutputView.printStart();
    InputView.readBridgeSize(this.#makeBridge.bind(this));
  }

  #makeBridge(size) {
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;
    const bridge = BridgeMaker.makeBridge(size, generateRandomNumber);
    this.bridgeGame.saveBridge(bridge);
  }

  play() {
    InputView.readMoving(this.movePlayer.bind(this));
  }

  movePlayer(moving) {
    this.printMap();
  }

  printMap() {
    const map = this.bridgeGame.getMap();
    OutputView.printMap(map);
  }
}

module.exports = App;
