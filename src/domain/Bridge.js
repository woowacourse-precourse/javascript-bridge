class Bridge {
  #bridge;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  isLastPosition(player) {
    return this.#bridge.length === player.getCurrentPosition();
  }

  getNextDirection(player) {
    return this.#bridge[player.getCurrentPosition()];
  }
}

module.exports = Bridge;
