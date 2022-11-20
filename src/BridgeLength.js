class BridgeLength {
  #number;

  constructor(number) {
    this.validate(number);
    this.checkNaturality();
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
}

module.exports = BridgeLength;
