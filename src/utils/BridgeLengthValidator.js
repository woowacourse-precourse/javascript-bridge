class BridgeLengthValidate {
  static validate(number) {
    if (this.#isNumber(number)) throw new Error("[ERROR] 정수만 입력해주세요.");
  }

  static #isNumber(number) {
    const isNumber = /^[0-9]+$/;
    return !isNumber.test(number);
  }
}
module.exports = BridgeLengthValidate;
