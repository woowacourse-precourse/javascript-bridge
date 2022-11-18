class BridgeValidator {
  static checkInputBridgeLength(number, min, max) {
    this.#isNumber(number);
    this.#isCheckGap(number, min, max);
  }
  static checkBridge(bridge, min, max) {
    this.#isArray(bridge);
    this.checkInputBridgeLength(bridge.lenght, min, max);
    bridge.forEach((bridgeElement) => {
      if (bridgeElement != 'U' && bridgeElement != 'D') {
        throw new Error('[ERROR] bridge는 U, D만 있어야 합니다.');
      }
    });
  }
  static #isNumber(number) {
    if (isNaN(+number)) {
      throw new Error('[ERROR] 숫자가 아닙니다');
    }
    return true;
  }
  static #isCheckGap(number, min, max) {
    if (+min <= +number && +number <= +max) {
      throw new Error(
        `[ERROR] 숫자가 다음의 범위에 없습니다. : ${min}이상 ${max}이하`,
      );
    }
    return true;
  }
  static #isArray(array) {
    if (Array.isArray(array)) {
      throw new Error('[ERROR] 배열이 아닙니다.');
    }
    return true;
  }
}

module.exports = BridgeValidator;
