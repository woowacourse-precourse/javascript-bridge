const { GAME_RULE, COMMAND } = require('../utils/Constant');

class BridgeGame {
  #bridge;
  #moveCount;
  #retryCount;

  constructor(bridge, moveCount, retryCount) {
    this.#bridge = bridge;
    this.#moveCount = moveCount;
    this.#retryCount = retryCount;
  }

  isMove(direction) {
    return direction === this.#bridge[this.#moveCount];
  }

  isCompletion() {
    return this.#bridge.length === this.#moveCount;
  }

  move() {
    this.#moveCount += 1;
  }

  retry() {
    this.#retryCount += 1;
    this.#moveCount = 0;
  }

  convertBridge(floor) {
    return this.#bridge.slice(0, this.#moveCount).map((current) => {
      if (current === floor) {
        return GAME_RULE.SUCCESS;
      }
      return GAME_RULE.BLANK;
    });
  }

  getConvertedBridge() {
    const upsideBridge = this.convertBridge(COMMAND.UPSIDE);
    const downsideBridge = this.convertBridge(COMMAND.DOWNSIDE);
    return { upsideBridge, downsideBridge };
  }

  getFailureBridge({ upsideBridge, downsideBridge }) {
    if (this.#bridge[this.#moveCount] === COMMAND.UPSIDE) {
      upsideBridge.push(GAME_RULE.BLANK);
      downsideBridge.push(GAME_RULE.FAIL);
    } else if (this.#bridge[this.#moveCount] === COMMAND.DOWNSIDE) {
      upsideBridge.push(GAME_RULE.FAIL);
      downsideBridge.push(GAME_RULE.BLANK);
    }
    return { upsideBridge, downsideBridge };
  }

  getBridge() {
    return this.#bridge;
  }

  getMoveCount() {
    return this.#moveCount;
  }

  getRetryCount() {
    return this.#retryCount;
  }
}

module.exports = BridgeGame;
