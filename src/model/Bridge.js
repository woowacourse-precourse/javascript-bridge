const { Console } = require('@woowacourse/mission-utils');

class Bridge {
  #bridge;

  constructor() {
    this.#bridge = {
      blueprint: [],
      length: 0,
      upperBridge: '',
      lowerBridge: '',
      turn: 0,
    };
  }

  get data() {
    return this.#bridge;
  }

  setData(key, value) {
    this.#bridge = { ...this.#bridge, [key]: value };
  }
}

module.exports = Bridge;
