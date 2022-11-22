const Map = require('./Map');
const { RESULT } = require('./utils/constants');

class BridgeGame {
  #bridgeMap = [];
  #result = RESULT.SUCCESS;

  getBridgeMap() {
    return this.#bridgeMap;
  }

  getResult() {
    return this.#result;
  }

  setResult(userMove, bridge) {
    this.#result = RESULT.SUCCESS;
    for (let index = 0; index < userMove.length; index++) {
      if (userMove[index] != bridge[index]) this.#result = RESULT.FAILURE;
    }
  }

  move(bridgeInfo, moveDirection) {
    bridgeInfo.userMove.push(moveDirection);
    this.#bridgeMap = Map.makeMap(bridgeInfo);
  }

  retry(bridgeInfo) {
    this.init(bridgeInfo);
  }

  init(bridgeInfo) {
    this.#bridgeMap = [];
    this.#result = RESULT.SUCCESS;
    bridgeInfo.userMove = [];
    bridgeInfo.tryCount++;
  }
}

module.exports = BridgeGame;
