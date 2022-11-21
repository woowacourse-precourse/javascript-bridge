const InputView = require("../GameIO/InputView");
const Bridge = require("./Bridge.js");
const BridgeGame = require("../Controller/BridgeGame");
const OutputView = require("../GameIO/OutputView");

class Game {
  #bridge;
  #playCount;
  #bridgeLength;
  #bridgeStatus;
  constructor(bridgeLength) {
    this.#bridgeLength = bridgeLength;
    this.setPlayCount();
    this.#bridge = new Bridge(this.#bridgeLength);
    this.#bridgeStatus = this.#bridge.getBridgeStatus;
    this.bridgeGame = new BridgeGame(this.#bridgeStatus);
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

  playAlgorithms() {
    let moveCount = 0;
    for (moveCount = 0; moveCount < this.#bridgeLength; moveCount++) {
      const NEXT_DIRECTION = InputView.readMoving();
      if (this.bridgeGame.move(NEXT_DIRECTION, moveCount) === false) {
        break; //
      }
    }
    return true;
  }
}

module.exports = Game;
