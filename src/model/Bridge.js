const { Console } = require('@woowacourse/mission-utils');

const init = {
  blueprint: [],
  length: 0,
  upperBridge: '',
  lowerBridge: '',
  turn: 0,
};

class Bridge {
  #bridge;

  constructor() {
    this.#bridge = { ...init };
  }

  get data() {
    return this.#bridge;
  }

  setData(key, value) {
    this.#bridge = { ...this.#bridge, [key]: value };
  }

  retry() {
    this.#bridge = { ...init, blueprint: this.#bridge.blueprint, length: this.#bridge.length };
  }
}

module.exports = Bridge;
