class BridgeLength {
  #number;

  constructor(number) {
    this.validate(number);
  }

  validate(number) {
    const isNumber = Number(number);
    if (!isNumber) throw "[ERROR] 다리 길이는 숫자여야 합니다.";
    this.#number = isNumber;
  }
}

module.exports = BridgeLength;
