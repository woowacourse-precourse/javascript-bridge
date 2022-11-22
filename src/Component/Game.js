const InputView = require("../View/InputView");
const Bridge = require("./Bridge.js");
const BridgeGame = require("./BridgeGame");
const OutputView = require("../View/OutputView");

class Game {
  #bridge;
  #playCount;
  #bridgeLength;
  #bridgeStatus;
  #bridgeGame;
  constructor(bridgeLength) {
    this.#bridgeLength = bridgeLength;
    this.#playCount = 1;
    this.#bridge = new Bridge(this.#bridgeLength);
    this.#bridgeStatus = this.#bridge.getBridgeStatus;
    this.#bridgeGame = new BridgeGame(this.#bridgeStatus);
  }

  get getPlayCount() {
    return this.#playCount;
  }

  increasePlayCount() {
    this.#playCount += 1;
  }

  get getBridgeGame() {
    return this.#bridgeGame;
  }

  getGameResult() {
    const JUMP_HISTORY = this.#bridgeGame.getJumpHistory;
    OutputView.printResult(this.#playCount, this.#bridgeStatus, JUMP_HISTORY);
  }
}

module.exports = Game;
