const BridgeGame = require('./controller/BridgeGame');
const Bridge = require('./model/Bridge');
const { readBridgeSize, readMoving } = require('./view/InputView');
const { printGameStart } = require('./view/OutputView');

class App {
  #bridge;

  #bridgeGame;

  play() {
    this.#bridgeGame = new BridgeGame();
    printGameStart();
    readBridgeSize(this);
  }

  getBridge() {
    return this.#bridge;
  }

  getBridgeGame() {
    return this.#bridgeGame;
  }

  makeBridge(size) {
    this.#bridge = new Bridge(size);
    readMoving(this, 0);
  }
}

module.exports = App;
