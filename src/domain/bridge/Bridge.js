const BridgePanel = require('./BridgePanel');

class Bridge {
  static #LENGTH_RULES = {
    min: 3,
    max: 20,
  };

  #panels;

  constructor(panels) {
    Bridge.validate(panels);
    this.#panels = panels.map((panel) => new BridgePanel(panel));
  }

  static validate(panels) {
    if (panels.size < this.#LENGTH_RULES.min) {
      throw new Error(`[ERROR] 다리의 길이가 ${this.#LENGTH_RULES.min}보다 작습니다.`);
    }

    if (panels.size > this.#LENGTH_RULES.max) {
      throw new Error(`[ERROR] 다리의 길이가 ${this.#LENGTH_RULES.max}보다 큽니다.`);
    }
  }

  stepOn(index, direction) {
    return this.#panels[index].checkTempered(direction);
  }
}

module.exports = Bridge;
