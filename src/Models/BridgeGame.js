const BridgeMaker = require('../BridgeMaker');
const { generateRandomNumber } = require('../utils/bridgeHandler');
const { BRIDGE_VALUE } = require('../utils/constants');

class BridgeGame {
  #myBridge;
  #round = BRIDGE_VALUE.DEFAULT_ROUND;
  #alive = BRIDGE_VALUE.DEFAULT_ALIVE_VALUE;
  #resultData;

  constructor() {
    this.#resultData = {
      gameProgress: [...BRIDGE_VALUE.DEFAULT_GAME_PROGRESS],
      playCount: BRIDGE_VALUE.DEFAULT_COUNT,
      gameResult: BRIDGE_VALUE.RESULT_WIN,
    };
  }

  createBridge(size) {
    this.#resultData.playCount += BRIDGE_VALUE.COUNT_UNIT;
    this.#myBridge = BridgeMaker.makeBridge(size, generateRandomNumber);
  }

  move(select) {
    this.#alive = this.checkAlive(select);
    this.#resultData.gameProgress.push({ select, alive: this.#alive });
    this.#round += BRIDGE_VALUE.ROUND_UNIT;
  }

  retry() {
    this.#resultData.gameProgress = [...BRIDGE_VALUE.DEFAULT_GAME_PROGRESS];
    this.#round = BRIDGE_VALUE.DEFAULT_ROUND;
    this.#alive = BRIDGE_VALUE.DEFAULT_ALIVE_VALUE;
    this.#resultData.playCount += BRIDGE_VALUE.COUNT_UNIT;
  }

  defeat() {
    this.#resultData.gameResult = BRIDGE_VALUE.RESULT_DEFEAT;
  }

  win() {
    this.#resultData.gameResult = BRIDGE_VALUE.RESULT_WIN;
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

  getResultData() {
    return this.#resultData;
  }
}

module.exports = BridgeGame;
