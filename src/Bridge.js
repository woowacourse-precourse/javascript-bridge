class Bridge {
  #bridge;

  constructor(bridge) {
    this.#validate(bridge);
    this.#bridge = bridge;
  }

  #validate(bridge) {
    if (bridge.length < 3 || bridge.length > 20) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  }

  isLastPosition(player) {
    return this.#bridge.length === player.getCurrentPosition();
  }

  getNextDirection(player) {
    return this.#bridge[player.getCurrentPosition()];
  }
}

module.exports = Bridge;
