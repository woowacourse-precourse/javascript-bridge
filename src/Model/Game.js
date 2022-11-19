const InputView = require("../GameIO/InputView");
const Bridge = require("./Bridge.js");

class Game {
  #bridge;
  #playCount;
  constructor() {
    this.setPlayCount();
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

  gameAlgorithms() {
    // 이미 게임이 시작되어 bridge 객체가 만들어짐
  }

  gameStartPoint() {
    if (this.#playCount === 1) {
      const bridge = this.initialGame();
      this.setBridge(bridge);
    }
    if (this.#playCount > 1) {
      const bridge = this.continueGame();
      this.setBridge(bridge);
    }
  }

  initialGame() {
    const bridgeLength = InputView.readBridgeSize();
    const bridge = new Bridge(bridgeLength);
  }
  continueGame() {
    const bridgeLength = this.#Bridge.getBridgeLength();
    const bridge = new Bridge(bridgeLength);
  }
}

module.exports = Game;
