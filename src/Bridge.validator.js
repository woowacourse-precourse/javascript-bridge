class BridgeValidator {
  static checkBridgeLength(number, min, max) {
    this.#isNumber(number);
    this.#isCheckGap(number, min, max);
  }
  static #isNumber(number) {
    if (isNaN(+number)) {
      throw new Error('[ERROR] 숫자가 아닙니다');
    }
  }
  static #isCheckGap(number, min, max) {
    if (+min <= +number && +number <= +max) {
      throw new Error(
        `[ERROR] 숫자가 다음의 범위에 없습니다. : ${min}이상 ${max}이하`,
      );
    }
  }
}

module.exports = BridgeValidator;
