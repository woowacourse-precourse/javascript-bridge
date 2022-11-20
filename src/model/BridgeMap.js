const MissionUtils = require('@woowacourse/mission-utils');
const { BRIDGE_MESSAGE, BRIDGE_INFO } = require('../utils/constant');

class BridgeMap {
  #upside;
  #downside;

  constructor() {
    this.#upside = [];
    this.#downside = [];
  }

  update(isCorrect, moving) {
    isCorrect ? this.updateCorrect(moving) : this.updateIncorrect(moving);
  }

  updateCorrect(moving) {
    if (moving === BRIDGE_MESSAGE.UP_SIGN) {
      this.#upside.push('O');
      this.#downside.push(' ');
      return;
    }

    this.#upside.push(' ');
    this.#downside.push('O');
  }

  updateIncorrect(moving) {
    if (moving === BRIDGE_MESSAGE.UP_SIGN) {
      this.#upside.push('X');
      this.#downside.push(' ');
      return;
    }

    this.#upside.push(' ');
    this.#downside.push('X');
  }

  toString() {
    return [
      `${BRIDGE_INFO.BEGIN} ${this.#upside.join(BRIDGE_INFO.WALL)} ${
        BRIDGE_INFO.END
      }`,
      `${BRIDGE_INFO.BEGIN} ${this.#downside.join(BRIDGE_INFO.WALL)} ${
        BRIDGE_INFO.END
      }`,
    ];
  }
}

module.exports = BridgeMap;
