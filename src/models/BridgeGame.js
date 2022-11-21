
class BridgeGame {
  #bridge;
  #result;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#result = {
      map: new Map([
        ['U', []],
        ['D', []],
      ]),
      attempts: 1,
    }
  }

  move() {
    this.#bridge.move();
  }

  retry() {
    this.#result.map = new Map([
      ['U', []],
      ['D', []],
    ]);
    this.#result.attempts += 1;
    this.#bridge.initializeCurrentDirection();
  }

  isAnswer(direction) {
    if (this.#bridge.isCurrentDirection(direction)) return true;
    return false;
  }

  isGameEnd() {
    if (this.#bridge.isBridgeEnd()) return true;
    return false;
  }

  getResult() {
    return this.#result;
  }

  updateResult(direction) {
    for (let dir of this.#result.map.keys()) {
      if (dir !== direction) this.#result.map.get(dir).push(' ');
    }
    if (this.isAnswer(direction)) {
      this.#result.map.get(direction).push('O');
      return;
    }
    this.#result.map.get(direction).push('X');
  }
}

module.exports = BridgeGame;
