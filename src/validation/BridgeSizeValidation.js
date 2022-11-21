/**
 * 사용자가 입력한 다리 길이의 유효성을 검사한다.
 */
class BridgeSizeValidation {
  #number;

  constructor(number) {
    this.validate(number);
    this.checkNaturality();
    this.checkRange();
  }

  /**
   * 사용자가 입력한 값이 숫자인지 판별한다.
   * @param {string} number - 사용자가 입력한 문자열 형태의 다리 길이
   */
  validate(number) {
    const isNumber = Number(number);
    if (!isNumber) throw "[ERROR] 다리 길이는 숫자여야 합니다.";
    this.#number = isNumber;
  }

  /**
   * 사용자가 입력한 값이 자연수인지 판별한다.
   */
  checkNaturality() {
    const number = this.#number;
    if (Math.floor(number) !== number)
      throw "[ERROR] 다리 길이는 자연수여야 합니다.";
  }

  /**
   * 사용자가 입력한 값이 유효한 범위 내에 있는지 판별한다.
   */
  checkRange() {
    const number = this.#number;
    if (number < 3 || number > 20)
      throw "[ERROR] 다리 길이는 3이상 20이하 입니다.";
  }
}

module.exports = BridgeSizeValidation;
