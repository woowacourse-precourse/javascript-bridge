class UpDownKey {
  #input;

  #REGEX = /^U$|^D$/;

  constructor(input) {
    this.#input = input;
  }

  getValidateData() {
    if (!this.#REGEX.test(this.#input)) {
      throw new Error('[ERROR] U 또는 D 문자만 입력 가능합니다.');
    }

    return this.#input;
  }
}

module.exports = UpDownKey;
