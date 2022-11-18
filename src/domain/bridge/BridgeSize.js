class BridgeSize {
  static #RULES = {
    min: 3,
    max: 20,
  };

  static validate(size) {
    if (size < this.#RULES.min) {
      throw new Error('[ERROR] 다리의 길이는 3이상 20이하입니다.');
    }

    if (size > this.#RULES.max) {
      throw new Error('[ERROR] 다리의 길이는 3이상 20이하입니다.');
    }
  }
}

module.exports = BridgeSize;
