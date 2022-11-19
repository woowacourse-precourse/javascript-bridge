class Bridge {
  #bridge;

  constructor(bridge) {
    this.#validate(bridge);
    this.#bridge = bridge;
  }

  #validate(bridge) {
    if (bridge.length < 3 || bridge.length > 20) {
      throw new Error("[ERROR] 다리의 길이는 3 이상 20 이하의 숫자만 입력 가능합니다.");
    }
  }
}

module.exports = Bridge;
