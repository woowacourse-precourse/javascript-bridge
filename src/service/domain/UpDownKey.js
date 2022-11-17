const { REGEX, ERROR_MESSAGE } = require('../../utils/constants');

class UpDownKey {
  #input;

  constructor(input) {
    this.#input = input;
  }

  getValidateData() {
    if (!REGEX.upDownKey.test(this.#input)) {
      throw new Error(ERROR_MESSAGE.upDownKey);
    }

    return this.#input;
  }
}

module.exports = UpDownKey;
