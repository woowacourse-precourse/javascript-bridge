const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');

class App {
  static play() {
    this.bridgeGame = new BridgeGame();
    App.#createRandomBridge();
  }

  static async #createRandomBridge() {
    const size = await InputView.readBridgeSize();
    this.bridgeGame.setRandomBridge(size);
  }
}

module.exports = App;
