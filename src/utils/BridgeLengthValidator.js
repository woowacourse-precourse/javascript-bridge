class BridgeLengthValidate {
  static validate(number) {
    if (this.#isNumber(number)) throw new Error("[ERROR] 정수만 입력해주세요.");
    if (this.#isValidRange(number)) throw new Error("[ERROR] 3이상 20이하 숫자만 입력해주세요");
  }

  static #isNumber(number) {
    const isNumber = /^[0-9]+$/;
    return !isNumber.test(number);
  }
  static #isValidRange(number) {
    return number > 20 || number < 3;
  }
}
module.exports = BridgeLengthValidate;
