const Exceptionable = require('./Exceptionable');
const { ERROR_MESSAGE, REGEX } = require('../../utils/constants');

class BrdgeLengthException extends Exceptionable {
  #bridgeLength;

  constructor(bridgeLength) {
    super();

    this.#bridgeLength = bridgeLength;
  }

  getValidation() {
    if (!REGEX.bridgeLength.test(this.#bridgeLength)) {
      throw new Error(ERROR_MESSAGE.bridgeLength);
    }

    return this.#bridgeLength;
  }
}

module.exports = BrdgeLengthException;
