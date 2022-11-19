const InputView = require("../View/InputView");
const Bridge = require("../Controller/Bridge.js");

class Game {
  #bridge;
  #playCount;
  constructor() {
    this.setPlayCount();
    this.gameStartPoint();
  }

  setPlayCount() {
    this.#playCount = 0;
  }

  getPlayCount() {
    return this.#playCount;
  }

  increasePlayCount() {
    this.#playCount += 1;
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  gameStartPoint() {
    if (this.#playCount === 0) {
      const bridge = this.initialGame();
      this.setBridge(bridge);
    }
    if (this.#playCount > 0) {
      const bridge = this.continueGame();
      this.setBridge(bridge);
    }
  }

  initialGame() {
    const bridgeLength = InputView.readBridgeSize();
    const bridge = new Bridge(bridgeLength);
    return bridge;
  }
  continueGame() {
    const bridgeLength = this.#Bridge.getBridgeLength();
    const bridge = new Bridge(bridgeLength);
    return bridge;
  }
}

module.exports = Game;
