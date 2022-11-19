class BridgeLengthValidate {
  static validate(number) {
    if (this.#isNumber(number)) throw new Error("[ERROR] 정수만 입력해주세요.");
    if (this.#isValidRange(number))
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
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
