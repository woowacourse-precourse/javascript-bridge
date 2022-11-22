const { HOTKEY, RESULT_MAP } = require("../constants/constants");

class BridgeGame {
  #bridge;
  #result;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#result = {
      map: new Map([
        [HOTKEY.up, []],
        [HOTKEY.down, []],
      ]),
      attempts: 1,
    }
  }

  move() {
    this.#bridge.move();
  }

  retry() {
    this.#result.map = new Map([
      [HOTKEY.up, []],
      [HOTKEY.down, []],
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
      if (dir !== direction) this.#result.map.get(dir).push(RESULT_MAP.trap);
    }
    if (this.isAnswer(direction)) {
      this.#result.map.get(direction).push(RESULT_MAP.correct);
      return;
    }
    this.#result.map.get(direction).push(RESULT_MAP.incorrect);
  }
}

module.exports = BridgeGame;
