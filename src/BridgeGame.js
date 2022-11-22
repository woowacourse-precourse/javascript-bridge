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
      this.#moveInfo.push({'moving': moving, 'success': false}); return 'fail';
    } else if(this.#moveCnt + 1 === this.#bridgeInfo.length) {
      this.#moveInfo.push({'moving': moving, 'success': true}); return 'success';
    } else if(this.#bridgeInfo[this.#moveCnt] === moving) {
      this.#moveInfo.push({'moving': moving, 'success': true});
      this.#moveCnt += 1; return 'next';
    }
  }

  retry(command) {
    if(command === 'R') {
      this.retrySetting();
      return 'retry';
    } else if(command === 'Q') {
      return 'quit';
    }
  }

  retrySetting() {
    this.#tryCnt += 1;
    this.#moveCnt = 0;
    this.#moveInfo = [];
  }

}

module.exports = BridgeGame;
