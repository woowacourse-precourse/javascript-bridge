class BridgeLength {
  #number;

  constructor(number) {
    this.validate(number);
    this.checkNaturality();
    this.checkRange();
  }

  validate(number) {
    const isNumber = Number(number);
    if (!isNumber) throw "[ERROR] 다리 길이는 숫자여야 합니다.";
    this.#number = isNumber;
  }

  checkNaturality() {
    const number = this.#number;
    if (Math.floor(number) !== number)
      throw "[ERROR] 다리 길이는 자연수여야 합니다.";
  }

  checkRange() {
    const number = this.#number;
    if (number < 3 || number > 20)
      throw "[ERROR] 다리 길이는 3이상 20이하 입니다.";
  }
}

module.exports = BridgeLength;
