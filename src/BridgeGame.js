const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator')
const MESSAGE = require('../src/MessageContent');

class BridgeGame {
  #bridge;
  #collectInputResult = {
    moveIndex: 0,
    bridgeMap: [[], []],
    tryCount: 1,
  };

  makeBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  moveCompare(move) {
    const index = this.#bridge[this.#collectInputResult.moveIndex];
    this.isPass(move, index);
    this.isNonPass(move, index);
    this.#collectInputResult.moveIndex += 1;
  }

  isPass(move, index) {
    if (move === index && move === 'U') {
      this.#collectInputResult.bridgeMap[0].push('O');
      this.#collectInputResult.bridgeMap[1].push(' ');
    }
    if (move === index && move === 'D') {
      this.#collectInputResult.bridgeMap[0].push(' ');
      this.#collectInputResult.bridgeMap[1].push('O');
    }
  }

  isNonPass(move, index) {
    if (move !== index && move === 'U') {
      this.#collectInputResult.bridgeMap[0].push('X');
      this.#collectInputResult.bridgeMap[1].push(' ');
    }
    if (move !== index && move === 'D') {
      this.#collectInputResult.bridgeMap[0].push(' ');
      this.#collectInputResult.bridgeMap[1].push('X');
    }
  }

  isClear(callback) {
    const mapIndex = this.#collectInputResult.bridgeMap
    callback(this.checkBridgeStats(mapIndex));
  }

  checkBridgeStats(mapIndex) {
    if (mapIndex[0].includes('X') || mapIndex[1].includes('X')) {
      return false;
    }
    if (this.#collectInputResult.bridgeMap[0].length === this.#bridge.length) {
      return true;
    }
  }

  retry(callback) {
    if (callback === MESSAGE.RETRY_KEY) {
      this.resetBridge()
      return true
    }
    
    if (callback === MESSAGE.QUIT_KEY) return false
  }

  resetBridge() {
    this.#collectInputResult.bridgeMap[0].pop()
    this.#collectInputResult.bridgeMap[1].pop()
    this.#collectInputResult.moveIndex -= 1
    this.#collectInputResult.tryCount += 1
  }

  moveResult() {
    return this.#collectInputResult.bridgeMap;
  }

  mapResult(stats) {
    return {
      bridgeMap: this.#collectInputResult.bridgeMap,
      gameOver: stats ? MESSAGE.SUCCESSS : MESSAGE.FAILURE,
      moveCount: `${MESSAGE.TRY}${this.#collectInputResult.tryCount}`,
    };
  }
}

module.exports = BridgeGame;
