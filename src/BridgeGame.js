const { Console } = require('@woowacourse/mission-utils')
const BridgeMaker = require('./BridgeMaker')
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
const { ERROR, STRING } = require('./common/Contents')

class BridgeGame {
  #bridge
  #thisBridge
  #gameCount

  constructor (size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)
    this.#thisBridge = [...this.#bridge]
    this.#gameCount = 1
  }

  getGameCount() {
    return this.#gameCount
  }

  move(userInput) {
    const cell = this.#thisBridge.shift()

    if (userInput !== STRING.BOTTOM_BRIDGE && userInput !== STRING.TOP_BRIDGE) {
      throw new Error(ERROR.ONLY_D_AND_U)
    }
    if (cell !== userInput) {
      return [userInput, 'fail']
    }
    if (!this.#thisBridge.length) {
      return [userInput, 'finish']
    }
    if (cell === userInput) {
      return [userInput, 'success']
    }
  }

  retry(userInput) {
    if (userInput !== STRING.RESTART && userInput !== STRING.QUIT) {
      throw new Error(ERROR.ONLY_R_AND_Q)
    }
    if (userInput === STRING.RESTART) {
      this.#thisBridge = [...this.#bridge]
      this.#gameCount += 1
      return true
    } 
    if (userInput === STRING.QUIT) {
      Console.close()
    }
  }
}

module.exports = BridgeGame
