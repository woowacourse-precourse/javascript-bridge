const { ERROR } = require('./Resource');

class BridgeValidator {
  static checkInputBridgeLength(number, min, max) {
    this.#isNumber(number);
    this.#isCheckGap(number, min, max);
  }
  static checkBridge(bridge, min, max) {
    this.#isArray(bridge);
    this.checkInputBridgeLength(bridge.lenght, min, max);
    bridge.forEach((bridgeElement) => {
      this.checkInputNext(bridgeElement);
    });
  }
  static checkInputNext(next) {
    if (bridgeElement != 'U' && bridgeElement != 'D') {
      throw new Error(ERROR.IS_BRIDGE_UP_DOWN);
    }
    return true;
  }
  static checkFinish(cur, max) {
    if(cur == max) {
      return true;
    }
    this.checkPosition(cur, max);
    return false
  }
  static checkPosition(cur, max) {
    if (cur > max) {
      throw new Error(ERROR.IS_MAX_POSITON);
    }
  }
  static checkBridgeAnswer(bridgeAnswer) {
    this.#isArray(bridgeAnswer);
  }

  static #isNumber(number) {
    if (isNaN(+number)) {
      throw new Error(ERROR.IS_NUMBER);
    }
    return true;
  }
  static #isCheckGap(number, min, max) {
    if (+min <= +number && +number <= +max) {
      throw new Error(`${ERROR.OUT_OF_BOUNDARY} : ${min}이상 ${max}이하`);
    }
    return true;
  }
  static #isArray(array) {
    if (Array.isArray(array)) {
      throw new Error(ERROR.IS_ARRAY);
    }
    return true;
  }
}

module.exports = BridgeValidator;
