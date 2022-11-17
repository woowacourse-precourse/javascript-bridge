class BridgeLength {
  #REGEX = /^[3-9]{1}$|^1{1}[0-9]{1}$|^20$/;

  #input;

  constructor(input) {
    this.#input = input;
  }

  getValidateData() {
    if (!this.#REGEX.test(this.#input)) {
      throw new Error('[ERROR] 3 ~ 20 이하의 다리 길이를 입력하세요');
    }

    return Number(this.#input);
  }
}

module.exports = BridgeLength;
