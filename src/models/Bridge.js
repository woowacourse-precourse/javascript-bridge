class Bridge {
  constructor(size) {
    Bridge.#validateSize(size);
  }

  static #validateSize(size) {
    if (size === '') {
      throw new Error('[ERROR] 빈 값을 입력했습니다.');
    }

    if (size.includes(' ')) {
      throw new Error('[ERROR] 공백을 포함해 입력했습니다.');
    }

    if (isNaN(size)) {
      throw new Error('[ERROR] 다리의 길이 입력 값은 숫자여야 합니다.');
    }

    if (+size < BRIDGE_RULE.LENGTH_MIN || +size > BRIDGE_RULE.LENGTH_MAX) {
      throw new Error('[ERROR] 다리의 길이는 3이상 20이하의 숫자여야 합니다.');
    }
  }
}

module.exports = Bridge;
