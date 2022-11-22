const { MOVING_RESULT, RETRY_INPUT, RETRY_RESULT } = require('../src/const/Bridge');

class BridgeGame {
  #bridgeInfo;
  #moveCnt;
  #moveInfo;
  #tryCnt;

  constructor() {
    this.#bridgeInfo = [];
    this.#moveCnt = 0;
    this.#moveInfo = [];
    this.#tryCnt = 1;
  }

  setBridge(bridge) {
    this.#bridgeInfo = bridge;
  }

  getMoveInfo() {
    return this.#moveInfo;
  }

  getTryCnt() {
    return this.#tryCnt;
  }

  move(moving) {
    if(this.#bridgeInfo[this.#moveCnt] !== moving) {
      this.#moveInfo.push({'moving': moving, 'success': false}); return MOVING_RESULT.fail;
    } else if(this.#moveCnt + 1 === this.#bridgeInfo.length) {
      this.#moveInfo.push({'moving': moving, 'success': true}); return MOVING_RESULT.success;
    } else if(this.#bridgeInfo[this.#moveCnt] === moving) {
      this.#moveInfo.push({'moving': moving, 'success': true});
      this.#moveCnt += 1; return MOVING_RESULT.next;
    }
  }

  retry(command) {
    if(command === RETRY_INPUT.retry) {
      this.retrySetting();
      return RETRY_RESULT.retry;
    } else if(command === RETRY_INPUT.quit) {
      return RETRY_RESULT.quit;
    }
  }

  retrySetting() {
    this.#tryCnt += 1;
    this.#moveCnt = 0;
    this.#moveInfo = [];
  }

}

module.exports = BridgeGame;
