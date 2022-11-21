const { status } = require('./lib/constants')

class BridgeGame {
  #bridge
  #moves

  /**
   * @param {string[]=} bridge
   */
  constructor(bridge = []) {
    this.#bridge = bridge
    this.#moves = []
  }

  get bridge() {
    return this.#bridge
  }

  get moves() {
    return this.#moves
  }

  move(newMove) {
    if (newMove) {
      this.#moves.push(newMove)
    }
  }

  retry() {
    this.#moves = []
  }

  getStatus() {
    if (this.#isFailure()) {
      return status.READ_COMMAND
    }

    return this.#bridge.length === this.#moves.length
      ? status.FINISHED
      : status.READ_MOVE
  }

  /**
   * @returns {boolean}
   */
  #isFailure() {
    return this.#moves.some((move, index) => this.#bridge[index] !== move)
  }
}

module.exports = BridgeGame
