const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
  #bridgeGame;
  #playCount;
  constructor() {
    this.#bridgeGame = null;
    this.#playCount = 0;
  }

  async initiate() {
    const bridgeSize = await InputView.readBridgeSize();
    this.#bridgeGame = new BridgeGame(
      BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate)
    );
  }

  play() {}

  increasePlayCount() {
    this.#playCount++;
  }
}

const app = new App();
app.play();

module.exports = App;
