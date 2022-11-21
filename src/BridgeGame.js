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
}

module.exports = BridgeGame
