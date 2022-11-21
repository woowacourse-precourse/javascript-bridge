const BridgeMaker = require('../src/BridgeMaker')
const randomNumber = require('../src/controller/GenerateRandomNumber')
const MESSAGE = require('../src/MessageContent')

class BridgeGame {
  #bridge
  #collectInputResult = {
    moveIndex: 0,
    bridgeMap: [[], []],
    tryCount: 1,
  }

  makeBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size, randomNumber)
  }

  moveCompare(move) {
    const index = this.#bridge[this.#collectInputResult.moveIndex]
    this.isPass(move, index)
    this.isNonPass(move, index)
    this.#collectInputResult.moveIndex += 1
  }

  isPass(move, index) {
    if (move === index && move === 'U') {
      this.#collectInputResult.bridgeMap[0].push('O') 
      this.#collectInputResult.bridgeMap[1].push(' ')
    }
    if (move === index && move === 'D') {
      this.#collectInputResult.bridgeMap[0].push(' ') 
      this.#collectInputResult.bridgeMap[1].push('O')
    }
  }

  isNonPass(move, index) {
    if (move !== index && move === 'U') {
      this.#collectInputResult.bridgeMap[0].push('X') 
      this.#collectInputResult.bridgeMap[1].push(' ')
    }
    if (move !== index && move === 'D') {
      this.#collectInputResult.bridgeMap[0].push(' ') 
      this.#collectInputResult.bridgeMap[1].push('X')
    }
  }

  moveResult() {
    return this.#collectInputResult.bridgeMap
  }

  isClear(callback) {
  callback(this.checkBridgeStats())
}

checkBridgeStats() {
  if (this.#collectInputResult.bridgeMap[0].length === this.#bridge.length) {
    return true
  }
}

mapResult(stats) {
  return {
    bridgeMap: this.#collectInputResult.bridgeMap,
    gameOver: stats ? MESSAGE.SUCCESSS : MESSAGE.FAILURE,
    moveCount: `${MESSAGE.TRY}${this.#collectInputResult.tryCount}`
  }
}
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
