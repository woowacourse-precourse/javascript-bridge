const { REGEX, ERROR_MESSAGE } = require('../../utils/constants');

class BridgeLength {
  #input;

  constructor(input) {
    this.#input = input;
  }

  getValidateData() {
    if (!REGEX.bridgeLength.test(this.#input)) {
      throw new Error(ERROR_MESSAGE.bridgeLength);
    }

    return Number(this.#input);
  }
}

module.exports = BridgeLength;
