const BridgeMaker = require('../BridgeMaker');
const { generateRandomNumber } = require('../utils/bridgeHandler');
const { BRIDGE_VALUE } = require('../utils/constants');

class BridgeGame {
  #myBridge;
  #gameProgress = [...BRIDGE_VALUE.DEFAULT_GAME_PROGRESS];
  #round = BRIDGE_VALUE.DEFAULT_ROUND;
  #alive = BRIDGE_VALUE.DEFAULT_ALIVE_VALUE;
  #playCount = BRIDGE_VALUE.DEFAULT_COUNT;
  #gameResult = BRIDGE_VALUE.RESULT_WIN;

  createBridge(size) {
    this.#playCount += BRIDGE_VALUE.COUNT_UNIT;
    this.#myBridge = BridgeMaker.makeBridge(size, generateRandomNumber);
  }

  move(select) {
    this.#alive = this.checkAlive(select);
    this.#gameProgress.push({ select, alive: this.#alive });
    this.#round += BRIDGE_VALUE.ROUND_UNIT;
  }

  retry() {
    this.#gameProgress = [...BRIDGE_VALUE.DEFAULT_GAME_PROGRESS];
    this.#round = BRIDGE_VALUE.DEFAULT_ROUND;
    this.#alive = BRIDGE_VALUE.DEFAULT_ALIVE_VALUE;
    this.#playCount += BRIDGE_VALUE.COUNT_UNIT;
  }

  defeat() {
    this.#gameResult = BRIDGE_VALUE.RESULT_DEFEAT;
  }

  checkGameEnd() {
    return this.#myBridge.length === this.#round;
  }

  checkAlive(select) {
    return select === this.#myBridge[this.#round];
  }

  getAlive() {
    return this.#alive;
  }

  getGameProgress() {
    return this.#gameProgress;
  }

  getPlayCount() {
    return this.#playCount;
  }

  getGameResult() {
    return this.#gameResult;
  }
}

module.exports = BridgeGame;
